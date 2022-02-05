import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./login.css";

//Services
import { loginUser, isUserLoggedIn } from "../../services";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    isUserLoggedIn().then((userIsLoggedIn) => {
      if (userIsLoggedIn) {
        navigate("/");
      }
    });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    loginUser({ email: "", password: "" })
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleFormSubmit}>
        <h2 className="login__title">Login to Filmora</h2>
        <div className="login__input-container">
          <label className="login__form-label" htmlFor="email">Email  *</label>
          <input className="login__form-input" type="email" id="email" required />
        </div>

        <div className="login__input-container">
          <label className="login__form-label" htmlFor="password">Password  *</label>
          <input className="login__form-input" type="password" id="password" required />
        </div>

        <button className="login__form-btn" type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
