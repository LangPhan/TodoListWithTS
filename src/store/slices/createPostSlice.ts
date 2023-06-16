import { StateCreator } from "zustand";
import { PostInterface } from "../types/PostInterface";

const createPostSlice: StateCreator<PostInterface> = (set, get) => ({
  post: [],
  fetchPosts() {
    set({ post: [] });
  },
});

export default createPostSlice;
