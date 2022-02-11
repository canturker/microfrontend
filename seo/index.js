const puppeteer = require("puppeteer");
fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const crawlPages = [
    { url: "/", filename: "index.html" },
    { url: "/1", filename: "1.html" },
    { url: "/2", filename: "2.html" },
  ];

  for (let i = 0; i < crawlPages.length; i++) {
    const p = crawlPages[i];
    await page.goto(`http://localhost:5001${p.url}`, {
      waitUntil: "networkidle2",
    });
    const content = await page.content();
    fs.writeFile("./build/" + p.filename, content, function (err) {
      if (err) return console.log(err);
      console.log(`${p.url} > ${p.filename}`);
    });
  }
  await browser.close();
})();
