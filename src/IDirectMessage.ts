import type { Recipient } from "./message";

/**
 * Represents a direct message chat.
 */
export interface IDirectMessage {
  id: string;
  members: Record<string, Recipient>;
  muted?: string[];
  recentMessage?: number;
  createdAt: number;
  updatedAt?: number;
  /**
   * Indicates if the chat has only one member.
   * If there is only one member, the chat has to be deleted when the user leaves.
   */
  onlyOneMember?: boolean;
}
