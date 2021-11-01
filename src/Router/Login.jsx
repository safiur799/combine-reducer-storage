import React from "react";
import { Redirect } from "react-router";
import LoginForm from "../Components/LoginSignup/LoginForm";

function Login({ googleUser }) {
  if (googleUser) {
    return <Redirect to="/home" />;
  }
  return (
    <div>
      <LoginForm googleUser={googleUser} />
    </div>
  );
}

export default Login;
