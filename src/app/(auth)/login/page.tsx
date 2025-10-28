"use client";
import { httpService } from "@/core/http-service/http-service";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("12345678");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // 🆕 گرفتن CSRF cookie
      await httpService.get("/sanctum/csrf-cookie");

      // POST login
      const res = await httpService.post("/auth/login", { email, password });

      console.log("User logged in:", res.data.user);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.response?.data?.message || "خطا در ورود");
      console.log(err.response?.data);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", paddingTop: 50 }}>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <button onClick={handleLogin} style={{ width: "100%" }}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
