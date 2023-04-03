import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    name: 'SpongeBob', handle: '@spongebob',
    profilePicture: 'spongebob.jpeg', bannerPicture: 'spongebanner.jpeg',
    bio: 'the official SpongeBob SquarePants Twitter from @Nickelodeon',
    location: 'Boston, MA', dateOfBirth: '1986-07-14', dateJoined: '2009-04-02',
    followingCount: 12345, followersCount: 456, total_tuits: 123,
  },
  reducers: {
    updateProfile(state, action) {
      Object.assign(state, action.payload);
    }
  }
})

export const {
  updateProfile
} = profileSlice.actions;

export default profileSlice.reducer;