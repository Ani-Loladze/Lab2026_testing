import { test, expect, Page } from "@playwright/test";
import { GetStartedPage } from "../pages/getStartedPage";
import { GetStartedDropdownOption } from "../types/getStartedPageTypes";

test.describe("Get Started Page Top Navigation Dropdowns", () => {
  let getStartedPage: GetStartedPage;

  test.beforeEach(async ({ page }: { page: Page }) => {
    getStartedPage = new GetStartedPage(page);
    await getStartedPage.navigateToGetStartedPage();
  });

  // TC01 - Explore Discography
  test("TC01 - Explore Discography dropdown", async () => {
    const expectedOptions: GetStartedDropdownOption[] = [
      { label: "Explore All" },
      { label: "Advanced Search" },
      { label: "Most Collected" },
      { label: "Submit a Release" },
      { label: "Submission Guidelines" }
    ];

    await getStartedPage.openDropdown("Explore Discography");
    const actualTexts = await getStartedPage.getDropdownItemsText("Explore Discography");

    expect(actualTexts).toEqual(expectedOptions.map(opt => opt.label));
  });

  // TC02 - Shop Music
  test("TC02 - Shop Music dropdown", async () => {
    const expectedOptions: GetStartedDropdownOption[] = [
      { label: "Shop My Wants" },
      { label: "New & Upcoming" },
      { label: "Vinyl" },
      { label: "CD" },
      { label: "Cassette" },
      { label: "All Formats" }
    ];

    await getStartedPage.openDropdown("Shop Music");
    const actualTexts = await getStartedPage.getDropdownItemsText("Shop Music");

    expect(actualTexts).toEqual(expectedOptions.map(opt => opt.label));
  });

  // TC03 - Sell Music
  test("TC03 - Sell Music dropdown", async () => {
    const expectedOptions: GetStartedDropdownOption[] = [
      { label: "List Item For Sale" },
      { label: "Start Selling" },
      { label: "How To Grade" },
      { label: "How To Price" },
      { label: "How To Pack & Ship" },
      { label: "More Seller Resources" },
      { label: "Seller News & Updates" }
    ];

    await getStartedPage.openDropdown("Sell Music");
    const actualTexts = await getStartedPage.getDropdownItemsText("Sell Music");

    expect(actualTexts).toEqual(expectedOptions.map(opt => opt.label));
  });

  // TC04 - Community
  test("TC04 - Community dropdown", async () => {
    const expectedOptions: GetStartedDropdownOption[] = [
      { label: "Forum" },
      { label: "Groups" },
      { label: "List Explorer" },
      { label: "Discography Contributors" },
      { label: "Monthly Leaderboard" },
      { label: "Community Guidelines" }
    ];

    await getStartedPage.openDropdown("Community");
    const actualTexts = await getStartedPage.getDropdownItemsText("Community");

    expect(actualTexts).toEqual(expectedOptions.map(opt => opt.label));
  });

  // TC05 - Digs
  test("TC05 - Digs dropdown", async () => {
    const expectedOptions: GetStartedDropdownOption[] = [
      { label: "Essentials" },
      { label: "Features" },
      { label: "Most Valuable" },
      { label: "Collecting" },
      { label: "Audio Gear" }
    ];

    await getStartedPage.openDropdown("Digs");
    const actualTexts = await getStartedPage.getDropdownItemsText("Digs");

    expect(actualTexts).toEqual(expectedOptions.map(opt => opt.label));
  });

  // TC06 - Get Started (hover)
  test("TC06 - Get Started dropdown", async () => {
    const expectedOptions: GetStartedDropdownOption[] = [
      { label: "Discography" },
      { label: "Marketplace" },
      { label: "Collection" },
      { label: "Wantlist" },
      { label: "Value Statistics" },
      { label: "App" },
      { label: "Digs" }
    ];

    await getStartedPage.openDropdown("Get Started", true);
    const actualTexts = await getStartedPage.getDropdownItemsText("Get Started");

    expect(actualTexts).toEqual(expectedOptions.map(opt => opt.label));
  });

  // TC07 - News and Updates (hover)
  test("TC07 - News and Updates dropdown", async () => {
    const expectedOptions: GetStartedDropdownOption[] = [
      { label: "Company News" },
      { label: "Experience Updates" }
    ];

    await getStartedPage.openDropdown("News and Updates", true);
    const actualTexts = await getStartedPage.getDropdownItemsText("News and Updates");

    expect(actualTexts).toEqual(expectedOptions.map(opt => opt.label));
  });

  // TC08 - About Us (hover)
  test("TC08 - About Us dropdown", async () => {
    const expectedOptions: GetStartedDropdownOption[] = [
      { label: "Careers" },
      { label: "Get Involved" },
      { label: "Community Advisory Turntable" },
      { label: "Trust Center" }
    ];

    await getStartedPage.openDropdown("About Us", true);
    const actualTexts = await getStartedPage.getDropdownItemsText("About Us");

    expect(actualTexts).toEqual(expectedOptions.map(opt => opt.label));
  });
});
