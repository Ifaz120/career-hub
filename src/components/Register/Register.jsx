import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  // Grab both tools from the bag
  const { createNewUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Registering:", name, email);

    // password validation ekhane korbo
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }

    createNewUser(email, password)
      .then(result => {
        updateUserProfile(name, photo)
          .then(() => {
            toast.success("Account created and profile updated!");
            navigate("/");
          })
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log("Google Login Success:", result.user);
        navigate("/");
      })
      .catch(error => {
        console.error("Google Error:", error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen py-8 md:py-12">
      <div className="hero-content flex-col w-full px-4">
        <div className="text-center">
          {/* Responsive title size */}
          <h1 className="text-3xl md:text-5xl font-bold">Register now!</h1>
        </div>
        
        
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body p-6 md:p-8 pb-2">
            {/* Name Field */}
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold">Name</span></label>
              <input type="text" name="name" placeholder="your name" className="input input-bordered focus:border-primary" required />
            </div>

            {/* Photo URL Field */}
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold">Photo URL</span></label>
              <input type="text" name="photo" placeholder="photo url" className="input input-bordered focus:border-primary" required />
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold">Email</span></label>
              <input type="email" name="email" placeholder="email" className="input input-bordered focus:border-primary" required />
            </div>

            {/* Password Field */}
            <div className="form-control relative">
              <label className="label"><span className="label-text font-semibold">Password</span></label>
              <input 
                type={showPassword ? "text" : "password"} 
                name="password" 
                placeholder="password" 
                className="input input-bordered focus:border-primary" 
                required 
              />
              
              <button 
                type='button' 
                className="absolute right-4 top-[50px] text-xl opacity-60 hover:opacity-100"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary text-white font-bold tracking-wide">Register</button>
            </div>
          </form>

          <div className="px-6 md:px-8 pb-8 pt-0">
            <div className="divider opacity-50">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary w-full">
               Sign in with Google
            </button>
            
            <p className="text-center mt-6 text-sm font-semibold">
              Already have an account? <Link className="text-blue-600 font-bold underline hover:text-primary transition-colors" to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;