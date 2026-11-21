import React, { useState } from "react";
import IGNavlink from "../Components/IGNavlink";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();   // <-- add this line

  // your existing login/register code here
  // ... // or wherever you go after login
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const newUsers = {
      name,
      email,
      password,
    };
    const updatedUsers = [...users, newUsers];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("Registered successfully");
    navigate("/login");
  };
  return (
    <>
      <div className="max-w-md h-225 mx-auto px-4 py-16">
        <div className="bg-emerald-900/40 border border-emerald-800 rounded-xl p-8">
          <h1 className="text-2xl font-bold text-white mb-1">
            Create your account
          </h1>
          <p className="text-emerald-300 text-sm mb-6">
            Start creating invoices in minutes
          </p>

          <div>
            <label className="block text-emerald-200 text-sm mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(event.target.value)}
              className="w-full bg-emerald-950 border border-emerald-700 rounded-md mb-2 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-emerald-200 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(event.target.value)}
              className="w-full bg-emerald-950 border border-emerald-700 rounded-md mb-2 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-emerald-200 text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-emerald-950 border border-emerald-700 rounded-md mb-4 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="At least 6 characters"
            />
          </div>

          <form action="">
            <button
              type="submit"
              onClick={handleRegister}
              className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white py-2.5 rounded-md font-medium transition-colors"
            >
              Register
            </button>
          </form>

          <p className="text-emerald-300 text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-emerald-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
