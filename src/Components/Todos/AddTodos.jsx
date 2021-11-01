import React from "react";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { firestore } from "../../firebase/firebase.utils";
import "./AddTodos.css";

function AddTodos({ googleUser }) {
  const [inputText, setInputText] = useState();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    firestore.collection("todos").onSnapshot((snapshot) => {
      console.log("safiur" + snapshot.docs.map((doc) => doc.data().todos));
      setTodos(snapshot.docs.map((doc) => doc.data().todos));
    });
  }, []);

  if (!googleUser) {
    return <Redirect to="/signup" />;
  }

  const HandlerChange = () => {
    firestore.collection("todos").add({
      todos: inputText,
    });
    setInputText("");
  };
  return (
    <div className="main__add__section">
      <div className="main__addtodo">
        <input
          type="text"
          placeholder="add todo "
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={HandlerChange}>ADD</button>
      </div>
      <div>
        {todos.map((data) => (
          <div>{data}</div>
        ))}
      </div>
    </div>
  );
}

export default AddTodos;
