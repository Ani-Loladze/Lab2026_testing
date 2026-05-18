import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('TC-01 Verify Explore Discography dropdown', async ({ page }) => {
  const mainPage = new MainPage(page);

  await mainPage.open();

  await mainPage.openExploreDiscography();

  const options = mainPage.getExploreDiscographyOptions();

  await expect(options.exploreAll).toBeVisible();
  await expect(options.advancedSearch).toBeVisible();
  await expect(options.mostCollected).toBeVisible();
  await expect(options.submitRelease).toBeVisible();
  await expect(options.submissionGuidelines).toBeVisible();

  await options.exploreAll.click();
  await expect(page).toHaveURL(/\/search/);
});