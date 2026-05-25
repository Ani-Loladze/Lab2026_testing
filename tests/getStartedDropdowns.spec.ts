import { test, expect, Page } from "@playwright/test";
import { GetStartedPage } from "../pages/getStartedPage";

type DropdownTestCase = {
  testId: string;
  dropdownName: string;
  expectedOptions: string[];
  hover?: boolean;
};

const dropdownTestCases: DropdownTestCase[] = [
  {
    testId: "TC01",
    dropdownName: "Explore Discography",
    expectedOptions: [
      "Explore All",
      "Advanced Search",
      "Most Collected",
      "Submit a Release",
      "Submission Guidelines"
    ]
  },
  {
    testId: "TC02",
    dropdownName: "Shop Music",
    expectedOptions: [
      "Shop My Wants",
      "New & Upcoming",
      "Vinyl",
      "CD",
      "Cassette",
      "All Formats"
    ]
  },
  {
    testId: "TC03",
    dropdownName: "Sell Music",
    expectedOptions: [
      "List Item For Sale",
      "Start Selling",
      "How To Grade",
      "How To Price",
      "How To Pack & Ship",
      "More Seller Resources",
      "Seller News & Updates"
    ]
  },
  {
    testId: "TC04",
    dropdownName: "Community",
    expectedOptions: [
      "Forum",
      "Groups",
      "List Explorer",
      "Discography Contributors",
      "Monthly Leaderboard",
      "Community Guidelines"
    ]
  },
  {
    testId: "TC05",
    dropdownName: "Digs",
    expectedOptions: [
      "Essentials",
      "Features",
      "Most Valuable",
      "Collecting",
      "Audio Gear"
    ]
  },
  {
    testId: "TC06",
    dropdownName: "Get Started",
    hover: true,
    expectedOptions: [
      "Discography",
      "Marketplace",
      "Collection",
      "Wantlist",
      "Value Statistics",
      "App",
      "Digs"
    ]
  },
  {
    testId: "TC07",
    dropdownName: "News and Updates",
    hover: true,
    expectedOptions: [
      "Company News",
      "Experience Updates"
    ]
  },
  {
    testId: "TC08",
    dropdownName: "About Us",
    hover: true,
    expectedOptions: [
      "Careers",
      "Get Involved",
      "Community Advisory Turntable",
      "Trust Center"
    ]
  }
];

test.describe("Get Started Page Top Navigation Dropdowns", () => {
  let getStartedPage: GetStartedPage;

  test.beforeEach(async ({ page }: { page: Page }) => {
    getStartedPage = new GetStartedPage(page);
    await getStartedPage.navigateToGetStartedPage();
  });

  dropdownTestCases.forEach(
    ({ testId, dropdownName, expectedOptions, hover }) => {

      test(`${testId} - ${dropdownName} dropdown`, async () => {

        await getStartedPage.openDropdown(
          dropdownName,
          hover ?? false
        );

        const actualTexts =
          await getStartedPage.getDropdownItemsText(dropdownName);

        expect(actualTexts).toEqual(expectedOptions);
      });
    }
  );
});