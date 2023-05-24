import React from "react";
import MyNavbar from "../MyNavbar";

const Login = () => {
  // const [username, setUsername] = useState("");
  const loginHandler = () => {
    //
    localStorage.setItem("loggedIn", true);
  };
  return (
    <>
      <MyNavbar />
      <form onSubmit={loginHandler}>
        {/* <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> */}
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
