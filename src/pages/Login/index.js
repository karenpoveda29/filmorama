const Login = () => {
  return (
    <form>
      <did>
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
      </did>

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
