export interface CustomerData {
  metadata: {
    firebaseUID: string;
  };
  email?: string;
}

export interface Price {
  active: boolean;
  currency: string;
  unit_amount: number;
  description: string | null;
  type: "one_time" | "recurring";
  interval: "day" | "month" | "week" | "year" | null;
  interval_count: number | null;
  trial_period_days: number | null;
  [propName: string]: unknown;
}

export interface Product {
  active: boolean;
  name: string;
  description: string | null;
  role: string | null;
  images: Array<string>;
  prices?: Array<Price>;
  [propName: string]: unknown;
}

export interface Recurring {
  aggregate_usage?: string;
  interval: string;
  interval_count: number;
  usage_type: string;
}

export interface Subscription<ReferenceType> {
  metadata: {
    [name: string]: string;
  };
  stripeLink: string;
  role: string | null;
  quantity: number;
  items: SubscriptionItem[];
  product: ReferenceType;
  price: ReferenceType;
  prices: Array<ReferenceType>;
  status:
    | "active"
    | "canceled"
    | "incomplete"
    | "incomplete_expired"
    | "past_due"
    | "trialing"
    | "unpaid";
  cancel_at_period_end: boolean;
  created: number;
  current_period_start: number;
  current_period_end: number;
  ended_at: number | null;
  cancel_at: number | null;
  canceled_at: number | null;
  trial_start: number | null;
  trial_end: number | null;
}

export interface SubscriptionItem {
  id: string;
  object: string;
  billing_thresholds?: Record<string, any>;
  created: number;
  metadata: Record<string, any>;
  price: Price;
  quantity: number;
  subscription: string;
  tax_rates?: Record<string, any>[];
}

export interface TaxRate {
  id: string;
  object: string;
  active: boolean;
  country: string;
  created: number;
  description: string;
  display_name: string;
  inclusive: boolean;
  jurisdiction: string;
  livemode: boolean;
  metadata: Record<string, any>;
  percentage: number;
  state?: string;
  tax_type: string;
  [propName: string]: any;
}
