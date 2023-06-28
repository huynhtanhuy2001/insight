import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AvatarState {
  imageUrl: string;
}

const initialState: AvatarState = {
  imageUrl: '',
};

const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    setAvatarImageUrl: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { setAvatarImageUrl } = avatarSlice.actions;
export default avatarSlice.reducer;
