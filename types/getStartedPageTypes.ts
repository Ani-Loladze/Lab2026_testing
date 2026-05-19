/** Dropdown names in the top navigation of Get Started page */
export type DropdownName =
  | "Explore Discography"
  | "Shop Music"
  | "Sell Music"
  | "Community"
  | "Digs"
  | "Get Started"
  | "News and Updates"
  | "About Us";

/** Interface for a dropdown item on Get Started page */
export interface GetStartedDropdownOption {
  /** Visible text of the dropdown item */
  label: string;
}
