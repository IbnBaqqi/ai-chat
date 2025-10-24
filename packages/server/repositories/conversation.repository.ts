// Implementation Details
const conversations = new Map<string, string>();

export const conversationRepository = {
   // Get the last response ID for a conversation
   getLastResponseId(conversationId: string): string | undefined {
      return conversations.get(conversationId);
   },

   // Set the last response ID for a conversation
   setLastResponseId(conversationId: string, responseId: string): void {
      conversations.set(conversationId, responseId);
   },
};
