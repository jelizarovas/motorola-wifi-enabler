const puppeteer = require("puppeteer");

(async () => {
  const browserOptions = {
    headless: false,
  };

  const browser = await puppeteer.launch(browserOptions);
  const [page] = await browser.pages();

  const navigationPromise = page.waitForNavigation();

  //   const goTo = async (selector) => {
  //     await page.waitForSelector(selector);
  //     await page.click(selector);
  //     await navigationPromise;
  //   };

  const enableRadio = async (name, selector) => {
    const fselector = selector || "MotoWlanRadioEnabled";
    try {
      await page.waitForSelector("select[name='MotoWlanRadioEnabled']");
      await page.select("select[name='MotoWlanRadioEnabled']", "1");
      //Save selection
      await page.waitForSelector(".moto-change-button");
      await page.click(".moto-change-button");
      await navigationPromise;

      console.log(name + " enabled");
    } catch (error) {
      console.log(name + " failed");
    }
  };

  await page.goto("http://192.168.0.1/login.asp");
  await page.setViewport({ width: 1000, height: 937 });
  await navigationPromise;

  await page.waitForSelector("#moto-username");
  await page.keyboard.press("Tab");

  await page.type(".moto-username-input-active", "admin");
  await page.keyboard.press("Tab");

  await page.type(".moto-password-input-active", "motorola");
  await page.keyboard.press("Enter");

  await navigationPromise;

  await page.goto("http://192.168.0.1/MotoWlanRadio.asp");
  await navigationPromise;

  //Select to disable radio (1 to enable)
  await enableRadio("2.4 GHz");
  //   try {
  //     await page.waitForSelector("select[name='MotoWlanRadioEnabled']");
  //     await page.select("select[name='MotoWlanRadioEnabled']", "1");
  //     //Save selection
  //     await page.waitForSelector(".moto-change-button");
  //     await page.click(".moto-change-button");
  //     await navigationPromise;
  //     console.log("2.4 GHz enabled succesfully!");
  //   } catch (error) {
  //     console.log("enabling 2.4ghz didn't work");
  //   }

  try {
    await page.waitForSelector(".moto-wlaninact-title");
    await page.click(".moto-wlaninact-title");
    await navigationPromise;
  } catch (error) {
    console.log("can't switch radios");
  }

  await enableRadio("5 GHz");
  //Select to disable radio (1 to enable)

  //   try {
  //     await page.waitForSelector("select[name='MotoWlanRadioEnabled']");
  //     await page.select("select[name='MotoWlanRadioEnabled']", "1");
  //     //Save selection
  //     await page.waitForSelector(".moto-change-button");
  //     await page.click(".moto-change-button");
  //     await navigationPromise;
  //     console.log("5 GHz enabled succesfully!");
  //   } catch (error) {
  //     console.log("5ghz enabling failed");
  //   }

  await navigationPromise;

  await page.goto("http://192.168.0.1/MotoWlanBasic.asp");
  await navigationPromise;

  try {
  } catch (error) {}

  //   await goTo(".moto-home-button");
  //   await goTo("#tdWireless");

  //   await page.waitForSelector(".moto-icon #tdWireless");
  //   await page.click(".moto-icon #tdWireless");

  //   await navigationPromise;

  //   await page.waitForSelector("#divWireless > table > tbody > tr > .td-menu:nth-child(10)");
  //   await page.click("#divWireless > table > tbody > tr > .td-menu:nth-child(10)");

  //   await navigationPromise;

  //   await page.waitForSelector("#divWireless > table > tbody > tr > .td-menu:nth-child(12)");
  //   await page.click("#divWireless > table > tbody > tr > .td-menu:nth-child(12)");

  //   await navigationPromise;

  //   await page.waitForSelector("#divWireless > table > tbody > tr > .td-menu:nth-child(4)");
  //   await page.click("#divWireless > table > tbody > tr > .td-menu:nth-child(4)");

  //   await navigationPromise;

  //   await page.waitForSelector(".moto-table-content > tbody > tr > .moto-param-value > select");
  //   await page.click(".moto-table-content > tbody > tr > .moto-param-value > select");

  //   await page.select(".moto-table-content > tbody > tr > .moto-param-value > select", "1");

  //   await page.waitForSelector(".moto-table-content > tbody > tr > .moto-param-value > select");
  //   await page.click(".moto-table-content > tbody > tr > .moto-param-value > select");

  //   await page.waitForSelector(".moto-table-content > tbody > tr > .moto-param-action > .moto-change-button");
  //   await page.click(".moto-table-content > tbody > tr > .moto-param-action > .moto-change-button");

  //   await navigationPromise;

  //   await page.waitForSelector("td > .moto-table-content-title > tbody > tr > .moto-wlaninact-title");
  //   await page.click("td > .moto-table-content-title > tbody > tr > .moto-wlaninact-title");

  //   await navigationPromise;

  //   await page.waitForSelector(".moto-table-content > tbody > tr > .moto-param-value > select");
  //   await page.click(".moto-table-content > tbody > tr > .moto-param-value > select");

  //   await page.select(".moto-table-content > tbody > tr > .moto-param-value > select", "1");

  //   await page.waitForSelector(".moto-table-content > tbody > tr > .moto-param-value > select");
  //   await page.click(".moto-table-content > tbody > tr > .moto-param-value > select");

  //   await page.waitForSelector(".moto-table-content > tbody > tr > .moto-param-action > .moto-change-button");
  //   await page.click(".moto-table-content > tbody > tr > .moto-param-action > .moto-change-button");

  //   await navigationPromise;

  //   await page.waitForSelector("#divWireless > table > tbody > tr > .td-menu:nth-child(2)");
  //   await page.click("#divWireless > table > tbody > tr > .td-menu:nth-child(2)");

  //   await navigationPromise;

  //   await page.waitForSelector(".moto-table-content > tbody > tr:nth-child(1) > .moto-param-value > select");
  //   await page.click(".moto-table-content > tbody > tr:nth-child(1) > .moto-param-value > select");

  //   await page.select(".moto-table-content > tbody > tr:nth-child(1) > .moto-param-value > select", "1");

  //   await page.waitForSelector(".moto-table-content > tbody > tr:nth-child(1) > .moto-param-value > select");
  //   await page.click(".moto-table-content > tbody > tr:nth-child(1) > .moto-param-value > select");

  //   await page.waitForSelector(".moto-table-content-title > tbody > tr > .moto-param-action > .moto-change-button");
  //   await page.click(".moto-table-content-title > tbody > tr > .moto-param-action > .moto-change-button");

  //   await navigationPromise;

  //   await page.waitForSelector("td > .moto-table-content-title > tbody > tr > .moto-wlaninact-title");
  //   await page.click("td > .moto-table-content-title > tbody > tr > .moto-wlaninact-title");

  //   await navigationPromise;

  //   await page.waitForSelector(".moto-table-content > tbody > tr:nth-child(1) > .moto-param-value > select");
  //   await page.click(".moto-table-content > tbody > tr:nth-child(1) > .moto-param-value > select");

  //   await page.select(".moto-table-content > tbody > tr:nth-child(1) > .moto-param-value > select", "1");

  //   await page.waitForSelector(".moto-table-content > tbody > tr:nth-child(1) > .moto-param-value > select");
  //   await page.click(".moto-table-content > tbody > tr:nth-child(1) > .moto-param-value > select");

  //   await page.waitForSelector(".moto-table-content-title > tbody > tr > .moto-param-action > .moto-change-button");
  //   await page.click(".moto-table-content-title > tbody > tr > .moto-param-action > .moto-change-button");

  await navigationPromise;

  await browser.close();
})();
