import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const {createNewUser} = useContext(AuthContext);
  const navigate = useNavigate();
  //function which handles the registration
  const handleRegister = (e)=>{
    e.preventDefault();

    const email= e.target.email.value;
    const password= e.target.password.value;
    console.log("Form submitted with:", email, password);
    createNewUser(email,password)
    .then(result=>{
      console.log("successfully registered: ", result.user);
      navigate("/");
    })
    .catch(error=>{
      console.log("Registration failed: ", error.messaage)
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  );
};

export default Register;