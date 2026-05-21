import { Page, Locator } from '@playwright/test';

export class MainPage { 
  readonly exploreDiscography: Locator;
  private exploreDropdown: Locator;

  constructor(public page: Page) {    
    this.exploreDiscography = this.page
      .getByRole('navigation')
      .getByRole('button', { name: 'Explore Discography' });
    this.exploreDropdown = this.page.getByRole('menu');
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async openExploreDiscography(): Promise<void> {
    await this.exploreDiscography.click();
    await this.exploreDropdown.waitFor({ state: 'visible' });
  }

  getExploreDiscographyOptions() {
  return {
    exploreAll: this.page.getByRole('menuitem', { name: 'Explore All' }),
    advancedSearch: this.page.getByRole('menuitem', { name: 'Advanced Search' }),
    mostCollected: this.page.getByRole('menuitem', { name: 'Most Collected' }),
    submitRelease: this.page.getByRole('menuitem', { name: 'Submit a Release' }),
    submissionGuidelines: this.page.getByRole('menuitem', { name: 'Submission Guidelines' }),
  };
}
}

