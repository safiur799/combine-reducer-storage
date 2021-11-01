import React from "react";
import style from "./Login.module.css";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { signInWithGoggle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";

export default function LoginForm({ googleUser }) {
  const [toggle, setToggle] = useState(true);
  const [submitValue, setSubmitValue] = useState("Login");
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const enterEamil = useRef();
  const enterPassword = useRef();
  const dispatch = useDispatch();

  const formHandler = (event) => {
    event.preventDefault();
  };
  const HandlerChange = () => {};
  return (
    <div className={style.form}>
      <div className={style.login}>
        <form className={style.input} onSubmit={formHandler}>
          <input
            style={{ marginTop: "1rem", textAlign: "center" }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter email"
            ref={enterEamil}
          />
          <input
            style={{ marginTop: "1rem", textAlign: "center" }}
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={enterPassword}
          />
          <input
            style={{ marginTop: "1rem", textAlign: "center" }}
            type="submit"
            value={submitValue}
          />
        </form>
        {googleUser ? (
          ""
        ) : (
          <button
            style={{ marginTop: "1rem", textAlign: "center" }}
            onClick={signInWithGoggle}
          >
            sign in wiht google
          </button>
        )}
        <button
          style={{ marginTop: "1rem", textAlign: "center" }}
          onClick={HandlerChange}
        >
          {toggle ? "ChangeToSignup" : "ChangeToLogin"}
        </button>
      </div>
    </div>
  );
}
