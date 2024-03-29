import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context";

const Login = () => {
  const initialFormDetails = {
    email: "",
    password: "",
  };

  const { loginUser, isAuthorizeid } = useAuth();
  const [formDetails, setFormDetails] = useState(initialFormDetails);

  const formDetailsHandler = () => {
    loginUser(formDetails.email, formDetails.password);
  };

  function loginWithTestCredentials() {
    setFormDetails((form) => ({
      ...form,
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    }));
  }

  return (
    <div className="authentication-page">
      <article className="form-container login-form">
        <div className="authentication-form-container">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <h3 className="h3">LOGIN</h3>
            <label htmlFor="email" className="input-label">
              Email Address:{" "}
            </label>
            <div className="input-icon icons-left">
              <span className="material-icons">email</span>
              <input
                className="input"
                autoComplete="off"
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email ID"
                value={formDetails?.email}
                onChange={(e) =>
                  setFormDetails((details) => ({
                    ...details,
                    email: e.target.value,
                  }))
                }
                required
              />
            </div>

            <label htmlFor="password" className="input-label">
              Password:{" "}
            </label>
            <div className="input-icon icons-left">
              <span className="material-icons">lock</span>
              <input
                className="input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                value={formDetails?.password}
                onChange={(e) =>
                  setFormDetails((details) => ({
                    ...details,
                    password: e.target.value,
                  }))
                }
                required
              />
            </div>

            <div className="checkbox-container">
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                />
                <label htmlFor="remember-me">
                  <span className="checkbox-detail">Remember me</span>
                </label>
              </div>
              <Link to="/" className="btn-link">
                Forgot Password?
              </Link>
            </div>

            <button className="btn btn-cta" onClick={formDetailsHandler}>
              Login
            </button>
            <button
              className="btn btn-primary-outline"
              onClick={loginWithTestCredentials}
            >
              Fill test credentials
            </button>
            <Link to="/signup" className="btn-link">
              Create New Account &gt;
            </Link>
          </form>
        </div>
      </article>
    </div>
  );
};

export { Login };
