import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test('Smoke: Discogs main page loads and title is correct', async ({ page }) => {
  const mainPage = new MainPage(page);

  await mainPage.open();

  const title = await mainPage.getTitle();

  await expect(title).toContain('Discogs');
});