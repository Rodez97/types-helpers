/**
 * Represents an utensil.
 */
export interface IUtensil {
  name: string;
  description?: string;
  optimalQuantity: number;
  currentQuantity: number;
  percent: number;
  tags?: string[];
  changes?: UtensilChange[];
  createdAt: number;
  updatedAt?: number;
  refPath: string;
  id: string;
}

/**
 * Represents a change in utensil quantity.
 */
export type UtensilChange = {
  quantity: number;
  date: number;
  user: {
    userId: string;
    userName: string;
  };
  reason?: string;
};
