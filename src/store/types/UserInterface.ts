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

export interface UserInterface {
  users: User[],
  fetchUser: () => void
  addToFriend: (user: User) => void
}
