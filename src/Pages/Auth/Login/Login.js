import React from "react";
import LoginImg from "../../../assets/images/login/login.svg";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
  };
  return (
    <div className="hero my-20">
      <div className="hero-content grid grid-cols-2">
        <div className="text-center lg:text-left">
          <img src={LoginImg} className="mx-auto" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
          <div className="card-body">
            <h1 className="text-5xl font-bold mb-5">Login now!</h1>
            <form action="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn bg-orange-400 border-orange-400"
                  value="Sign In"
                  onClick={(event) => handleLogin(event)}
                />
              </div>
            </form>
            <div className="text-center">
              <p className="text-lg mt-5">Or Sign In with</p>
              <div className="mt-5 mb-3">
                <button>
                  <BsFacebook className="text-4xl m-2 text-blue-500" />
                </button>
                <button>
                  <BsLinkedin className="text-4xl m-2 text-blue-500" />
                </button>
                <button>
                  <FcGoogle className="text-4xl m-2" />
                </button>
              </div>
              <p>
                Don't have account?
                <Link to="/signup" className="text-orange-400">
                  {" "}
                  SignUp
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
