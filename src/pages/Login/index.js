import { useNavigate } from "react-router-dom";


//Services
import { loginUser } from "../../services";

const Login = () => {

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    loginUser({email: "", password: ""}).then(() => {
      console.log("login successful");
      navigate("/");
    })
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="email">
          Email
          <span className="require">*</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>

      <div>
        <label htmlFor="password">
          Contraseña
          <span className="require">*</span>
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          required
        />    
      </div>

      <button type="submit">Ingresar</button>
    </form>
  );
};

export default Login;
