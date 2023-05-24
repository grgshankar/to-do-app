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
      <div className="container">
        <form onSubmit={loginHandler}>
          {/* <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> */}
          <button className="btn_">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
