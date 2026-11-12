// `npm run dev:all` — starts the whole site locally in one terminal:
//   - the ERP section (Next.js, erp/)   on http://localhost:3001/erp-suite
//   - the main site (Vite)              on http://localhost:5173  (proxies /erp-suite to the ERP)
// Open http://localhost:5173 and it behaves like production (one site, one address).
// Ctrl+C stops both.
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const erpDir = path.join(root, "erp");
const ERP_PORT = process.env.ERP_PORT || "3001";

if (!existsSync(path.join(erpDir, "node_modules"))) {
  console.error("The ERP's packages aren't installed yet. Run:  npm run setup");
  process.exit(1);
}

const children = [];
function run(name, color, cmd, args, opts) {
  const child = spawn(cmd, args, { shell: true, stdio: ["ignore", "pipe", "pipe"], ...opts });
  const tag = `\x1b[${color}m[${name}]\x1b[0m `;
  const relay = (stream, out) => {
    let buf = "";
    stream.on("data", (d) => {
      buf += d;
      const lines = buf.split(/\r?\n/);
      buf = lines.pop();
      for (const line of lines) out.write(tag + line + "\n");
    });
  };
  relay(child.stdout, process.stdout);
  relay(child.stderr, process.stderr);
  child.on("exit", (code) => {
    console.log(`${tag}stopped (exit ${code})`);
    shutdown(code ?? 0);
  });
  children.push(child);
}

let stopping = false;
function shutdown(code) {
  if (stopping) return;
  stopping = true;
  for (const c of children) {
    if (c.exitCode === null) {
      if (process.platform === "win32") spawn("taskkill", ["/pid", String(c.pid), "/t", "/f"], { stdio: "ignore" });
      else c.kill("SIGTERM");
    }
  }
  setTimeout(() => process.exit(code), 500);
}
process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));

run("erp ", "35", "npm", ["run", "dev", "--", "-p", ERP_PORT], { cwd: erpDir });
// 127.0.0.1 so both http://127.0.0.1:5173 and http://localhost:5173 work on Windows.
run("main", "36", "npm", ["run", "dev", "--", "--host", "127.0.0.1", "--port", "5173", "--strictPort"], { cwd: root, env: { ...process.env, ERP_DEV_URL: `http://localhost:${ERP_PORT}` } });
