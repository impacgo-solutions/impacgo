// Recompresses every image under src/assets and src/calviq/assets in place.
// Run after adding new images: node scripts/optimize-images.mjs
//
// - JPEGs: resized so the longest side is at most MAX_DIM, re-encoded at
//   mozjpeg quality 80. Safe to re-run — already-optimized files just get a
//   no-op pass (tiny/no further reduction).
// - PNGs WITH an alpha channel (real transparency): recompressed in place at
//   max compression, format kept as PNG.
// - PNGs WITHOUT an alpha channel: these are almost always photos saved as
//   PNG by mistake, which is 5-10x larger than the equivalent JPEG for no
//   benefit. The script does NOT auto-convert these (renaming the file means
//   updating every `import x from ".../y.png"` across the codebase, which
//   isn't safe to automate blindly) — it just flags them so you can convert
//   and update the import manually.
import sharp from 'sharp';
import { readFileSync, writeFileSync, statSync, readdirSync } from 'fs';
import { join, extname, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const MAX_DIM = 1920;
const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const scanDirs = [join(projectRoot, 'src/assets'), join(projectRoot, 'src/calviq/assets')];

function fmt(n) {
  return (n / 1024).toFixed(0) + 'KB';
}

function walk(dir) {
  let out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(walk(full));
    else out.push(full);
  }
  return out;
}

async function recompressJpeg(path) {
  const before = statSync(path).size;
  const input = readFileSync(path);
  const meta = await sharp(input).metadata();
  const longest = Math.max(meta.width, meta.height);
  let pipeline = sharp(input);
  if (longest > MAX_DIM) {
    pipeline =
      meta.width >= meta.height
        ? pipeline.resize({ width: MAX_DIM })
        : pipeline.resize({ height: MAX_DIM });
  }
  const out = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
  if (out.length < before) {
    writeFileSync(path, out);
    console.log(`JPEG  ${fmt(before)} -> ${fmt(out.length)}  ${path}`);
  }
}

async function recompressPng(path) {
  const before = statSync(path).size;
  const input = readFileSync(path);
  const out = await sharp(input)
    .png({ compressionLevel: 9, effort: 10, palette: true })
    .toBuffer();
  if (out.length < before) {
    writeFileSync(path, out);
    console.log(`PNG   ${fmt(before)} -> ${fmt(out.length)}  ${path}`);
  }
}

for (const dir of scanDirs) {
  let files;
  try {
    files = walk(dir);
  } catch {
    continue;
  }
  for (const path of files) {
    const ext = extname(path).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg') {
      await recompressJpeg(path);
    } else if (ext === '.png') {
      const meta = await sharp(readFileSync(path)).metadata();
      if (meta.hasAlpha) {
        await recompressPng(path);
      } else {
        console.log(
          `WARN  ${path} is a PNG with no transparency (likely a photo) — consider converting to .jpg and updating its import for a much smaller file.`
        );
      }
    }
  }
}

console.log('\nDone.');
