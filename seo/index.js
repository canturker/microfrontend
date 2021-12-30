const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:5001", {
    waitUntil: "networkidle2",
  });
  const content = await page.content();
  console.log(content);
  await browser.close();
})();
