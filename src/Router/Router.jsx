import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import AddTodos from "../Components/Todos/AddTodos";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
function Router({ googleUser }) {
  return (
    <div>
      <Navbar googleUser={googleUser} />
      <Switch>
        <Route path="/home" exact>
          <Home googleUser={googleUser} />
        </Route>
        <Route path="/addtodo" exact>
          <AddTodos googleUser={googleUser}/>
        </Route>
        <Route path="/donetodo"></Route>
        <Route path="/signup" exact>
          <Login googleUser={googleUser} />
        </Route>
      </Switch>
    </div>
  );
}
export default Router;
