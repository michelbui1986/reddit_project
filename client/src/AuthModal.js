import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
function AuthModal() {
    const [modalType, setModalType] = useState("login");
    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
  return (
    <div
      className="w-screen h-screen fixed absolute top-0 left-0 z-20 flex"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
      <div className="border border-reddit_dark-brightest w-3/4 sm:w-1/2 md: w-1/4 mx-auto rounded-xl bg-reddit_dark p-5 text-reddit_text self-center">
        {modalType === "login" && <h1 className="text-2xl mb-5">Login</h1>}
        {modalType === "register" && (
          <h1 className="text-2xl mb-5">Register</h1>
        )}
        {modalType === "register" && (
          <label>
            <span className="text-reddit_text-darker text-sm">Email:</span>
            <Input
              type="email"
              className="mb-3 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        )}

        <label>
          <span className="text-reddit_text-darker text-sm">Username:</span>
          <Input
            type="text"
            className="mb-3 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <span className="text-reddit_text-darker text-sm">Password:</span>
          <Input
            type="password"
            className="mb-3 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <Button className="w-full py-2 mb-3" style={{ borderRadius: ".3rem" }}>
          {modalType === "login" ? "Log In" : "Sign Up"}
        </Button>
        {modalType === "login" && (
          <div>
            New to Reddit?{" "}
            <button
              className="text-blue-600"
              onClick={() => setModalType("register")}>
              SIGN UP
            </button>
          </div>
        )}
        {modalType === "register" && (
          <div>
            Already have an account?{" "}
            <button
              onClick={() => setModalType("login")}
              className="text-blue-600">
              SIGN UP
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthModal;
