/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login"); // "Login", "Sign Up", or "Forgot Password"
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("You are Signed In");
        } else {
          toast.error(response.data.message);
        }
      } else if (currentState === "Login") {
        const response = await axios.post(backendUrl + "/api/user/login", { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("You are Logged In");
        } else {
          toast.error(response.data.message);
        }
      } else if (currentState === "Forgot Password") {
        // console.log("forgot password");
        
        const response = await axios.post(backendUrl + "/api/auth/forgotpassword", { email });
        if (response.data.success) {
          toast.success("Password reset link sent to your email!");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Show "Name" field only if in Sign Up state */}
      {currentState === "Sign Up" && (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
          className="w-full px-3 py-2 border border-gray-800"
          required
        />
      )}

      {/* Show email field */}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="E-Mail"
        className="w-full px-3 py-2 border border-gray-800"
        required
      />

      {/* Show password field only in Login and Sign Up states */}
      {(currentState === "Login" || currentState === "Sign Up") && (
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border border-gray-800"
          required
        />
      )}

      {/* Options to toggle between states */}
      <div className="w-full flex flex-col items-end text-sm mt-[-8px]">
        {currentState === "Forgot Password" ? (
          <p className="cursor-pointer" onClick={() => setCurrentState("Login")}>
            Back to Login
          </p>
        ) : (
          <>
            <p className="cursor-pointer" onClick={() => setCurrentState("Forgot Password")}>
              Forgot Password?
            </p>
            {currentState === "Login" ? (
              <p className="cursor-pointer" onClick={() => setCurrentState("Sign Up")}>Create Account</p>
            ) : (
              <p className="cursor-pointer" onClick={() => setCurrentState("Login")}>
                Already have an account? Login
              </p>
            )}
          </>
        )}
      </div>

      {/* Submit button */}
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign In" : currentState === "Sign Up" ? "Sign Up" : "Send Reset Link"}
      </button>
    </form>
  );
};

export default Login;
