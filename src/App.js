import Router from "./Router/Router";
import { auth } from "./firebase/firebase.utils";
import { useEffect, useState } from "react";

function App() {
  const [googleUser, setGoogleUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setGoogleUser(user));
    console.log(googleUser);

    return () => unsubscribe();
  }, [googleUser]);
  return (
    <div className="App">
      <Router googleUser={googleUser} />
    </div>
  );
}

export default App;
