import { BASE_URL } from '../utils/testConfig.js';

export class MainPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto(BASE_URL);
  }

  async getTitle() {
    return await this.page.title();
  }
}