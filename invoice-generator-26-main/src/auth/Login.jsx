import React, { useState } from "react";
import IGNavlink from "../Components/IGNavlink";
import Register from "./Register";
import { Navigate, useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]" );   
    if (!storedUsers) {
      alert("no user found");
      navigate("/register");
      return;
    }
    const loggedInUsers = storedUsers.find((user) => 
    user.email === email && 
    user.password === password
    );
    const loggedInEmail = {
      email,
    }
    if (loggedInUsers) {
      localStorage.setItem("isLoggedIN", "true");
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInEmail));
      alert("Login successfull");
      navigate("/create-invoice");
    } else {
      alert("Invalid password or email");   
    }
  };
  return (
    <>
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="bg-emerald-900/40 border border-emerald-800 rounded-xl p-8">
          <h1 className="text-2xl font-bold text-white mb-1">Welcome back</h1>
          <p className="text-emerald-300 text-sm mb-6">
            Login to manage your invoices
          </p>
          <div>
            <label className="block text-emerald-200 text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(event.target.value)}
              className="w-full bg-emerald-950 border border-emerald-700 rounded-md px-3 py-2 mb-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-emerald-200 text-sm mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(event.target.value)}
              className="w-full mb-4 bg-emerald-950 border border-emerald-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="••••••••"
            />
          </div>
          <form action="">
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white py-2.5 rounded-md font-medium transition-colors"
            >
              Login
            </button>
          </form>

          <p className="text-emerald-300 text-sm mt-6 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-emerald-400 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
