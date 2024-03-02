import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <div className="container-fluid bg-gradient-primary">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-6"> 
                  <img src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" class="rounded float-start" alt="..."></img>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <Link
                          to="/"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </Link>
                        <hr />
                        <Link
                          to="/"
                          className="btn btn-google btn-user btn-block"
                        >
                          <i className="fab fa-google fa-fw"></i> Login with
                          Google
                        </Link>
                        <Link
                          to="/"
                          className="btn btn-facebook btn-user btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw"></i> Login with
                          Facebook
                        </Link>
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link className="small" to="forgot-password">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link className="small" to="register">
                          Create an Account!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;