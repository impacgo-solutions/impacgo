// Tells Bing (and other IndexNow search engines: Yandex, Seznam, Naver…)
// that the site's pages changed, so they recrawl quickly instead of waiting.
// ChatGPT Search and Microsoft Copilot draw on Bing's index, so this also
// helps them see updates sooner.
//
// Run MANUALLY, only AFTER a production deploy is live:
//     npm run indexnow
//
// How it works: IndexNow has no sign-up. The site proves ownership by hosting
// a key file — public/88f926c6fbc5e5580fad2761378df997.txt, served at
// https://www.impacgo.com/88f926c6fbc5e5580fad2761378df997.txt — whose content is the key below.
// The key is not a secret (it is public by design). To rotate it, create a
// new public/<newkey>.txt containing <newkey>, update KEY here, delete the old file.
//
// It submits every <loc> in public/sitemap.xml under www.impacgo.com.

import { readFile } from "node:fs/promises";

const KEY = "88f926c6fbc5e5580fad2761378df997";
const HOST = "www.impacgo.com";

const sitemap = await readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1].trim())
  .filter((u) => new URL(u).host === HOST);

// Make sure the key file is actually live before submitting, otherwise
// IndexNow rejects the request (403).
const keyLocation = `https://${HOST}/${KEY}.txt`;
const keyRes = await fetch(keyLocation);
if (!keyRes.ok || (await keyRes.text()).trim() !== KEY) {
  console.error(`[indexnow] key file not live at ${keyLocation} — deploy first.`);
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation, urlList }),
});
// 200 = accepted, 202 = received (key check pending). Anything else is an error.
console.log(`[indexnow] submitted ${urlList.length} URLs → HTTP ${res.status}`);
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
