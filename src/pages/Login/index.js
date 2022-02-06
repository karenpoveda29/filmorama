import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./login.css";

//Services
import { loginUser, isUserLoggedIn } from "../../services";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    isUserLoggedIn().then((userIsLoggedIn) => {
      if (userIsLoggedIn) {
        navigate("/");
      }
    });
  }, [navigate]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    loginUser({ email, password })
      .then(() => {
        navigate("/");
      })
      .catch((error) => setLoginError(error));
  };

  const handleremoveLoginErrorMessage = () => {
    setLoginError("");
  };

  return (
    <section className="login">
      <form className="login__form" onSubmit={handleFormSubmit}>
        <h2 className="login__title">Login to Filmorama</h2>
        <div className="login__input-container">
          <label className="login__form-label" htmlFor="email">
            Email *
          </label>
          <input
            className="login__form-input"
            type="email"
            id="email"
            name="email"
            onChange={handleremoveLoginErrorMessage}
            required
          />
        </div>

        <div className="login__input-container">
          <label className="login__form-label" htmlFor="password">
            Password *
          </label>
          <input
            className="login__form-input"
            type="password"
            id="password"
            name="password"
            onChange={handleremoveLoginErrorMessage}
            required
          />
        </div>

        <p>{loginError}</p>
        <button className="login__form-btn" type="submit">
          LOGIN
        </button>
      </form>
    </section>
  );
};

export default Login;
