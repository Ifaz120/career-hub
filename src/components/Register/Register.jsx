import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  // Grab both tools from the bag
  const { createNewUser, signInWithGoogle ,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Registering:", name, email);

    //password validation ekhane korbo
    if(password.length <6){
        toast.error("Password must be at least 6 characters long");
        return;
    }
    if(!/[A-Z]/.test(password)){
        toast.error("Password must contain at least one uppercase letter");
        return;
    }
    if(!/[a-z]/.test(password)){
        toast.error("Password must contain at least one lowercase letter");
        return;
    }

    createNewUser(email, password)
      .then(result => {
        updateUserProfile(name,photo)
        .then(()=>{
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
    <div className="hero bg-base-200 min-h-screen py-10">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body pb-2">
            {/* Name Field */}
            <div className="form-control">
              <label className="label"><span className="label-text">Name</span></label>
              <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
            </div>

            {/* Photo URL Field */}
            <div className="form-control">
              <label className="label"><span className="label-text">Photo URL</span></label>
              <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label"><span className="label-text">Password</span></label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>

          <div className="p-8 pt-0">
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary w-full">
               Sign in with Google
            </button>
            
            <p className="text-center mt-4 text-sm font-semibold">
              Already have an account? <Link className="text-blue-600 font-bold underline" to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;