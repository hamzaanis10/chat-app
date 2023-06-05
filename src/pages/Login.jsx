const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <input required style={{ display: "none" }} type="file" id="file" />
          <button>Login</button>
        </form>
        <p>You don't have a account? Register</p>
      </div>
    </div>
  );
};

export default Login;
