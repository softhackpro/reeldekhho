import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  posts: null,
  isMute: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserProfile: (state, actions) => {
      state.user = actions.payload;
      state.isAuthenticated = !!state.user
    },
    setUserPost: (state, actions) => {
      state.posts = actions.payload;
    },
    setUserMute: (state, action) => {
      state.isMute = action.payload
    }
  },
});

export const { setUserProfile, setUserPost, setUserMute } = authSlice.actions;
export default authSlice.reducer;