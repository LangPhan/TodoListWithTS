import React from "react";
import useStore from "../store/useStore";

const Friend = () => {
  const friends = useStore().friend;
  const removeFriend = useStore().removeFriend;
  return (
    <div>
      <h2>List Friend ({friends.length})</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            {friend.name}
            <button
            className="mx-2 my-2 px-2 bg-white text-red-500"
            onClick={() => removeFriend(friend.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friend;
