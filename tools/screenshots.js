// Кадры для README: безголовый Chromium, страница по файловому адресу, без сети.
//   node tools/screenshots.js   ->  docs/screens/*.png
// Захват мыши только поддельный (lockStub из проверок): настоящий в безголовом Chromium
// на Windows зажимает курсор пользователя.
const path = require('path');
const fs = require('fs');
const { chromium } = require('@playwright/test');
const { pageUrl } = require('../tests/helpers');
const { lockStub } = require('../tests/_voxel-helpers');

const OUT = path.join(__dirname, '..', 'docs', 'screens');

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true, args: ['--allow-file-access-from-files'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await page.addInitScript(lockStub);
  await page.route(/^https?:\/\//, (r) => r.abort());
  page.on('dialog', (d) => d.accept());
  await page.goto(pageUrl('minecraft_clone_3d_1'));
  await page.waitForFunction(() => window.__voxel && window.__voxel.ready === true, null, { timeout: 60000 });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: path.join(OUT, 'menu.png') });

  // мир с зерном: день, вид вдаль с небольшого холма
  await page.evaluate(async () => {
    const v = window.__voxel;
    v.settings.renderDistance = 4;
    v.game.applySettings();
    await v.newWorld({ name: 'Кадр', seed: '2026', mode: 'creative' });
    try { await v.waitIdle(2); } catch (e) { /* дальние куски догрузятся за паузу ниже */ }
  });
  // герой взлетает над лесом (творческий режим) и смотрит вдаль
  await page.evaluate(() => { const v = window.__voxel, p = v.player; p.flying = true; p.pos.y += 16; p.vel.set(0, 0, 0); v.look(0.6, -0.32); v.step(0.05, 2); });
  await page.waitForTimeout(8000);
  await page.screenshot({ path: path.join(OUT, 'world.png') });

  await page.evaluate(() => window.__voxel.openInventory());
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(OUT, 'inventory.png') });
  await browser.close();
  console.log('кадры в', OUT);
})().catch((e) => { console.error(e); process.exit(1); });
