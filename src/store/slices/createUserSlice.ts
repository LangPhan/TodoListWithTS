import { StateCreator } from "zustand";
import { UserInterface } from "../types/userInterface";

const createUserSlice: StateCreator<UserInterface> = (set, get) => ({
  users: [],
  fetchUser: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    set({ users: await res.json() });
  },
  addToFriend: (user) => {
    set({
      users: [...get().users, user],
    });
  },
});

export default createUserSlice;
