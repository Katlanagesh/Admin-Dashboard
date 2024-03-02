import React from "react";
import { Link } from "react-router-dom";

function Forgot() {
  return (
    <div
      className="container-fluid bg-gradient-primary"
      style={{ height: "100vh" }}
    >
      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center ">
        <div className="container-fluid" style={{ marginTop: "100px" }}>
          <div className="card o-hidden border-0 shadow-lg ">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-6">
                <img src="data:image/jpeg;base64,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" class="rounded float-start" alt="..."></img>

                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-2">
                        Forgot Your Password?
                      </h1>
                      <p className="mb-4">
                        We get it, stuff happens. Just enter your email address
                        below and we'll send you a link to reset your password!
                      </p>
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
                      <Link
                        to="/login"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Reset Password
                      </Link>
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small" to="/register">
                        Create an Account!
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to="/login">
                        Already have an account? Login!
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
  );
}

export default Forgot;