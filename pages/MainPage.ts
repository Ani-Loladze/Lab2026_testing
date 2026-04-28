import { Page } from '@playwright/test';
import { BASE_URL } from '../utils/testConfig';

export class MainPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open(): Promise<void> {
    await this.page.goto(BASE_URL);
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }
}