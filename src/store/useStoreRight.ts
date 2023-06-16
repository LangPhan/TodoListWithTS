import { create } from "zustand";
import { UserInterface } from "./types/userInterface";
import createUserSlice from "./slices/createUserSlice";
import { PostInterface } from "./types/PostInterface";
import createPostSlice from "./slices/createPostSlice";

const useStoreRight = create<UserInterface & PostInterface>()((...a) => ({
  ...createUserSlice(...a),
  ...createPostSlice(...a),
}));

export default useStoreRight;
