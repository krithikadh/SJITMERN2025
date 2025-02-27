import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  
  const handleLogin = async (event) => {
    event.preventDefault();
    var req = await axios.post("http://localhost:3001/login", {
      email,
      password,
    });
    var isLoginSuccessful = req.data.isLoggedIn;
    if (isLoginSuccessful) {
      alert(req.data.message);
      navigate("/");
    } else {
      alert(req.data.message);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <br />
        <br />
        
        <button type="submit">Login</button>
      </form>
      <p>
        New User?<Link to="/login">Signup</Link>
      </p>
    </div>
  );
}
export default Login;