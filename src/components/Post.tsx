import React from "react";
import useStore from "../store/useStore";
import useFriendsPostsReactor from "../store/reactors/useFriendsPostsReactor";

const Post = () => {
  const fetchPosts = useStore().fetchPost;
  const posts =  useFriendsPostsReactor();

  React.useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <h2>Post ({posts.length})</h2>
      <ul>
        {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
};

export default Post;
