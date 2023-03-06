import React, { useContext } from "react";
import LoginImg from "../../../assets/images/login/login.svg";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="hero my-20">
      <div className="hero-content grid grid-cols-2">
        <div className="text-center lg:text-left">
          <img src={LoginImg} className="mx-auto" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
          <div className="card-body">
            <h1 className="text-5xl font-bold mb-5">Sign Up</h1>
            <form action="" onSubmit={handleSignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
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
                  name="password"
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
                />
              </div>
            </form>
            <div className="text-center">
              <p className="text-lg mt-5">Or Sign Up with</p>
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
                Already have account?
                <Link to="/login" className="text-orange-400">
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
