import React from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "login" })}
        className="px-4 py-1 mx-2 my-4 text-xl bg-orange-500 rounded-lg"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
