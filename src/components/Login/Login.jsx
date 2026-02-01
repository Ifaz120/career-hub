import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { userLogin, signInWithGoogle,resetPassword,loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = React.useRef();//ekhane pura form submit na korei peye jabo email
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then((result) => {
        toast.success("Login Successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleForgotPassword =()=>{
    const email = emailRef.current.value;
    if(!email){
      toast.error("Please provide your email first!");
      return ;
    }
    resetPassword(email)
    .then(()=>{
      toast.success("Password reset email sent! Check your inbox.");
    })
    .catch(err => toast.error(err.message));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
        {/* type = button ekhane refresh bondho korbe mane submit kora vabbena */}
        <button type="button" onClick={handleForgotPassword} className="label-text-alt link link-hover text-blue-600">
            Forgot password?
        </button>
    </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">{loading ? <span className="loading loading-spinner"></span> : "Login"}</button>
            </div>
          </form>

          {/* Google Sign In Button */}
          <div className="px-8 pb-4">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full"
            >
              Sign in with Google
            </button>
            <p className="text-center mt-4">
              Don't have an account?{" "}
              <Link className="text-blue-600 font-bold" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
