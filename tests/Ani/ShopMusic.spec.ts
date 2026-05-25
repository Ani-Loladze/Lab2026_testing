import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('TC-02 Verify Shop Music dropdown', async ({ page }) => {
  const mainPage = new MainPage(page);

  await mainPage.open();

  await mainPage.openShopMusic();

  const options = mainPage.getShopMusicOptions();
  await expect(options.shopMyWants).toBeVisible();
  await expect(options.newUpcoming).toBeVisible();
  await expect(options.vinyl).toBeVisible();
  await expect(options.cd).toBeVisible();
  await expect(options.cassette).toBeVisible();
  await expect(options.allFormats).toBeVisible();
  await options.vinyl.click();

  await expect(page).toHaveURL(/vinyl/i);
});