import { FormEvent, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await axios.post("http://localhost:3003/login", {
      email,
      password,
    });
    if (res.data) {
      auth?.setToken(res.data);
      alert("Login Sucessful");
    }
  }
  return (
    <>
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="Email">Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Password">Password:</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
