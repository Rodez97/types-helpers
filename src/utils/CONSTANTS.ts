/**
 * The format for displaying the week identifier, using week-year format.
 */
export const WEEKFORMAT: "[W]-W-YYYY" = "[W]-W-YYYY" as const;

/**
 * The format for shift representation, using day-month-year hour:minute format.
 */
export const SHIFTFORMAT: "DD-MM-YYYY HH:mm" = "DD-MM-YYYY HH:mm" as const;

/**
 * The format for displaying availability time, using hour:minute AM/PM format.
 */
export const AVAILABILITY_TIME_FORMAT = "h:mm A" as const;

/**
 * Default positions.
 */
export const POSITIONS = [
  "Back of House",
  "Baker",
  "Barista",
  "Bartender",
  "Busser",
  "Cashier",
  "Chef",
  "Cook",
  "Delivery",
  "Dishwasher",
  "Drive-Thru",
  "Expeditor",
  "Front of House",
  "Grill",
  "Host",
  "Kitchen",
  "Manager",
  "Prep Cook",
  "Runner",
  "Server",
  "Shift Leader",
  "Utility",
  "Sommelier",
  "Steward",
  "Barback",
];

/**
 * The product ID for Stripe integration.
 */
export const STRIPE_PRODUCT_ID = "prod_MINsulkDhsnMys";

/**
 * The price ID for Stripe integration.
 */
export const STRIPE_PRICE_ID = "price_1LzJiRCYVoOESVglTGNse4Wr";

/**
 * The maximum number of documents allowed.
 */
export const MAX_DOCUMENTS = 20;

/**
 * The maximum file size allowed in bytes (8MB).
 */
export const MAX_FILE_SIZE = 1024 * 1024 * 8;

/**
 * The maximum file size allowed for storage in bytes (50MB).
 */
export const MAX_FILE_SIZE_STORAGE = 1024 * 1024 * 50;

/**
 * The list of analytics events.
 */
export const ANALYTICS_EVENTS = [
  "shifts_created",
  "shifts_deleted",
  "shifts_updated",
  "notes_created",
  "notes_deleted",
  "notes_updated",
  "drawers_created",
  "drawers_deleted",
  "drawers_updated",
];
