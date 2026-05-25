import { Page, Locator } from '@playwright/test';

export class MainPage {
  public readonly page: Page;
  public readonly exploreDiscography: Locator;
  public readonly exploreDropdown: Locator;

  //Shop Music
  readonly shopMusic: Locator;
  private shopMusicDropdown: Locator;

  constructor(page: Page) {
    this.page = page;

    const navigation = page.getByRole('navigation');

    this.exploreDiscography = navigation.getByRole('button', {
      name: 'Explore Discography',
    });

    this.exploreDropdown = page.getByRole('menu');

    //Shop Music
    this.shopMusic = page
      .getByRole('navigation')
      .getByRole('button', { name: 'Shop Music' });

    this.shopMusicDropdown = page.getByRole('menu');
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

      advancedSearch: this.page.getByRole('menuitem', {
        name: 'Advanced Search',
      }),

      mostCollected: this.page.getByRole('menuitem', {
        name: 'Most Collected',
      }),

      submitRelease: this.page.getByRole('menuitem', {
        name: 'Submit a Release',
      }),

      submissionGuidelines: this.page.getByRole('menuitem', {
        name: 'Submission Guidelines',
      }),
    };
  }
  async openShopMusic(): Promise<void> {
    await this.shopMusic.click();
    await this.shopMusicDropdown.waitFor({ state: 'visible' });
  }

  getShopMusicOptions() {
    return {
      shopMyWants: this.page.getByRole('menuitem', {
        name: 'Shop My Wants',
      }),

      newUpcoming: this.page.getByRole('menuitem', {
        name: 'New & Upcoming',
      }),

      vinyl: this.page.getByRole('menuitem', {
        name: 'Vinyl',
      }),

      cd: this.page.getByRole('menuitem', {
        name: 'CD',
      }),

      cassette: this.page.getByRole('menuitem', {
        name: 'Cassette',
      }),

      allFormats: this.page.getByRole('menuitem', {
        name: 'All Formats',
      }),
    };
  }
}

