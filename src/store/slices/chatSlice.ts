import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  _id: string;
  senderId: string;
  content: string;
  isOwn: boolean;
  timestamp: string;
  seen: boolean;
}

interface ChatState {
  messages: Record<string, Message[]>;
  unseenCount: Record<string, number>;
}

const initialState: ChatState = {
  messages: {},
  unseenCount: {},
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<{ chatId: string; messages: Message[] }>) => {
      const { chatId, messages } = action.payload;
      state.messages[chatId] = messages;
      state.unseenCount[chatId] = messages.filter((msg) => !msg.seen).length;
    },
    addMessage: (state, action: PayloadAction<{ chatId: string; message: Message }>) => {
      const { chatId, message } = action.payload;
      if (!state.messages[chatId]) {
        state.messages[chatId] = [];
      }
      state.messages[chatId].push(message);
      if (!message.seen) {
        state.unseenCount[chatId] = (state.unseenCount[chatId] || 0) + 1;
      }
    },
    markAsSeen: (state, action: PayloadAction<{ chatId: string }>) => {
      const { chatId } = action.payload;
      if (state.messages[chatId]) {
        state.messages[chatId] = state.messages[chatId].map((msg) => ({ ...msg, seen: true }));
        state.unseenCount[chatId] = 0;
      }
    },
  },
});

export const { setMessages, addMessage, markAsSeen } = chatSlice.actions;
export default chatSlice.reducer;