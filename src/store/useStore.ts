import { create } from "zustand";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Address = {
  street: string;
  city: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  address: Address;
};

type Store = {
  users: User[];
  friend: User[];
  posts: Post[];
  postsFromFriends: Post[];
  fetchUser: () => void;
  addToFriend: (user: User) => void;
  removeFriend: (userId: number) => void;
  fetchPost: () => void;
  filterPostsByFriend: () => void;
};

const useStore = create<Store>((set, get) => ({
  users: [],
  friend: [],
  posts: [],
  postsFromFriends: [],
  fetchUser: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    set({ users: await res.json() });
  },

  addToFriend(user) {
    set({
      friend: [...new Set([...get().friend, user])],
    });
  },

  removeFriend(userId) {
    set({
      friend: get().friend.filter((friend) => friend.id !== userId),
    });
  },
  fetchPost: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    set({ posts: await res.json() });
  },
  filterPostsByFriend() {
    const PostsFromFriends = get().posts.filter((post) =>
      get().friend.find(friend => friend.id === post.userId)
    );
    set({ postsFromFriends: PostsFromFriends });
  },
}));

export default useStore;
