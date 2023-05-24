import { useNavigate } from "react-router-dom";

const AuthCheck = () => {
  const navigate = useNavigate();
  !localStorage.getItem("loggedIn") && navigate("/login", { replace: true });
};

export default AuthCheck;
