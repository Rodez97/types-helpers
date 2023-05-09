/**
 * Represents a message in a chat.
 */
export type IMessage = {
  _id: string;
  user: Sender;
  createdAt: number;
  system?: boolean;
  systemType?: "start" | "other";
  text: string;
  image?: string;
  status?: "pending" | "sent";
};

/**
 * Represents the messaging type for a message provider.
 */
export type MessageProviderMessagingType = {
  type: "dm" | "conversation";
  chatId: string;
};

/**
 * Represents the paths for a chat.
 */
export type ChatPaths = {
  messagesPath: string;
  usersPath: string;
  storagePath: string;
};

/**
 * Represents a sender or recipient of a message.
 */
export type Sender = {
  _id: string;
  name: string;
  avatar?: string;
};

/**
 * Represents a recipient of a message.
 */
export type Recipient = Sender;

/**
 * Regular expression for matching image URLs.
 */
export const imageRegex = /https?:\/\/[^\s]+\.(jpg|jpeg|png)(?:\?.*)?/gm;

/**
 * Regular expression for matching video URLs.
 */
export const videoRegex =
  /https?:\/\/[^\s]+\.(mp4|mkv|flv|ogv|avi|3gp)(?:\?.*)?/gm;

/**
 * Regular expression for matching YouTube video URLs.
 */
export const youtubeRegex =
  /((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?/gm;

/**
 * Regular expression for matching media URLs (images, videos, and YouTube videos).
 */
export const mediaUrlRegex = new RegExp(
  imageRegex.source + "|" + videoRegex.source + "|" + youtubeRegex.source,
  "gm"
);

/**
 * Represents parsed media information.
 */
export type ParsedMedia = {
  type: "image" | "video" | "youtube";
  url: string;
};

/**
 * Parses media URLs from a text string.
 * @param str The text string to parse.
 * @returns An array of parsed media objects, or null if no media URLs were found.
 */
export function parseMediaFromText(str: string): ParsedMedia[] | null {
  const matches = str.match(mediaUrlRegex);
  if (matches) {
    const media = matches.map<ParsedMedia>((url) => {
      const type = url.match(imageRegex)
        ? "image"
        : url.match(videoRegex)
        ? "video"
        : "youtube";
      return {
        type,
        url,
      };
    });
    return media;
  }
  return null;
}

/**
 * Generates chat paths based on the messaging type and user ID.
 * @param messagingType The messaging type.
 * @param uid The user ID.
 * @returns The chat paths.
 */
export function generateChatPaths(
  messagingType: MessageProviderMessagingType,
  uid: string
): ChatPaths {
  const { type, chatId } = messagingType;
  switch (type) {
    case "conversation": {
      return {
        messagesPath: `conversations/${chatId}/messages`,
        usersPath: `conversations/${chatId}/online/${uid}`,
        storagePath: `conversations/${chatId}`,
      };
    }
    case "dm": {
      return {
        messagesPath: `directMessages/${chatId}/messages`,
        usersPath: `directMessages/${chatId}/online/${uid}`,
        storagePath: `directMessages/${chatId}`,
      };
    }
  }
}
