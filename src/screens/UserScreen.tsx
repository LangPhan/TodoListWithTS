import React from "react";
import useStore from "../store/useStore";
import Friend from "../components/Friend";
import Post from "../components/Post";
import useStoreRight from "../store/useStoreRight";

const UserScreen = () => {
  const users = useStore((state) => state.users);
  const fetchUser = useStore((state) => state.fetchUser);
  const addToFriend = useStore().addToFriend

  const usersRight = useStoreRight().users;
  const fetchUserRight = useStoreRight().fetchUser;

  React.useEffect(() => {
    fetchUserRight();
  }, [fetchUserRight]);

  return (
    <>
    <ul>
      {usersRight.map((user) => (
        <li key={user.id} onClick={() => addToFriend(user)}>{user.name}</li>
      ))}
    </ul>
    <br/>
    <Friend/>
    <Post/>
    </>
  );
};

export default UserScreen;
