import { Page, Locator } from "@playwright/test";

export class GetStartedPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /** Navigate to the Get Started page */
  async navigateToGetStartedPage(): Promise<void> {
    await this.page.goto("https://www.discogs.com/about/get-started");
  }

  /**
   * Open a dropdown by name
   * @param dropdownName Name of the top navigation dropdown
   * @param hover true if the dropdown opens on hover
   */
  async openDropdown(dropdownName: string, hover = false): Promise<void> {
    const button = this.page.getByRole("button", { name: dropdownName });
    await button.waitFor({ state: "visible", timeout: 10000 });

    if (hover) {
      await button.hover();
      // Small pause for animation
      await this.page.waitForTimeout(500);
    } else {
      await button.click();
    }
  }

  /**
   * Get all visible dropdown items text
   * Uses getByRole relative to the button
   */
  async getDropdownItemsText(dropdownName: string): Promise<string[]> {
    const button = this.page.getByRole("button", { name: dropdownName });

    // Locate menu relative to button's parent container
    const menu: Locator = button.locator('..').getByRole("menu").first();
    await menu.waitFor({ state: "visible", timeout: 5000 });

    const items = menu.locator('li');
    return items.allTextContents();
  }
}
