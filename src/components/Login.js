import React, { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  console.log(isSignInForm);
  return (
    <div className="bg-gradient-to-b from-black">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg"
        className="absolute bg-gradient-to-b "
      />
      <div className="w-full bg-gradient-to-b from-black">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="absolute w-44 "
        />
        <form className="absolute my-28 w-3/12 mx-auto right-0 left-0">
          <div className="bg-black p-12 text-white bg-opacity-80 rounded-lg">
            <h1 className="text-2xl font-semibold mb-8 ">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 mb-5 bg-gray-700 text-sm rounded-sm"
              />
            )}
            <input
              type="text"
              placeholder="Email or phone number"
              className="w-full p-2 mb-5 bg-gray-700 text-sm rounded-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-5 bg-gray-700 text-sm rounded-s"
            />
            <button className="w-full p-2 mt-6 mb-3 bg-red-600 rounded-s">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <div className="flex justify-between text-sm text-gray-400">
              <div>
                <input type="checkbox" id="remember me" />
                <label htmlFor="remember me">Remember me</label>
              </div>
              <span>Need help?</span>
            </div>
            <p
              className="mt-10 text-gray-400 text-sm"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "New to Netflix?" : "Already Registered?"}{" "}
              <button>{isSignInForm ? "Sign up now" : "Sign in"}</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
