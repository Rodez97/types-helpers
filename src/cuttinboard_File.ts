/**
 * Represents a file in Cuttinboard.
 */
export interface ICuttinboard_File {
  name: string;
  storagePath: string;
  fileType: string;
  size: number;
  createdAt: number;
  updatedAt?: number;
  refPath: string;
  id: string;
}
