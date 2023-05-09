/**
 * Represents a note.
 */
export interface INote {
  title?: string;
  content: string;
  createdBy: {
    id: string;
    name: string;
  };
  updatedBy?: {
    id: string;
    name: string;
  };
  createdAt: number;
  updatedAt?: number;
  refPath: string;
  id: string;
}
