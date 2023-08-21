import React from "react";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Profile</h2>
      <button
        onClick={() => dispatch({ type: "logout" })}
        className="px-4 py-1 mx-2 my-4 text-xl bg-orange-500 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
