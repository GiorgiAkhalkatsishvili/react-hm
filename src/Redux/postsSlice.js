import { createSlice } from "@reduxjs/toolkit";


const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: true,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    removePosts: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setPosts, addPost, removePosts, setLoading } = postsSlice.actions;
export default postsSlice.reducer;
