import React from "react";
import useStore from "../useStore";

const useFriendsPostsReactor = () => {
  const friends = useStore().friend;
  const posts = useStore().posts;
  const postsFromFriends = useStore().postsFromFriends;
  const filterPostsByFriend = useStore().filterPostsByFriend;

  React.useEffect(() => {
    filterPostsByFriend();
  }, [filterPostsByFriend, friends, posts]);

  return postsFromFriends;
};

export default useFriendsPostsReactor;