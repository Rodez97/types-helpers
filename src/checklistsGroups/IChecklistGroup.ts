import { IChecklist } from "./IChecklist";

/**
 * A Checklist group is a group of checklists linked to a location.
 */
export interface IChecklistGroup {
  /**
   * The identifier of the location associated with the checklist group.
   */
  locationId: string;

  /**
   * An object representing the checklists within the checklist group.
   * Each checklist is identified by a string key and has a value of type `IChecklist`.
   */
  checklists?: {
    [key: string]: IChecklist;
  };

  /**
   * The timestamp indicating when the checklist group was created.
   */
  createdAt: number;

  /**
   * The timestamp indicating when the checklist group was last updated.
   */
  updatedAt?: number;

  /**
   * The reference path of the checklist group.
   */
  refPath: string;

  /**
   * The unique identifier of the checklist group.
   */
  id: string;
}
