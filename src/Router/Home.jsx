import React from "react";
import { Redirect } from "react-router-dom";
function Home({ googleUser }) {
  if (!googleUser) {
    return <Redirect to="/signup"></Redirect>;
  }
  return <div>welcome</div>;
}

export default Home;
