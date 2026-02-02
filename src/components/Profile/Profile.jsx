import React, { useContext } from 'react';
import auth from '../../firebase/firebase.config';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from "react-toastify";
import { Helmet } from 'react-helmet-async';

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    // jeno ekta save korle arekta change na hoy
    const realName = name || user.displayName;
    const realPhoto = photo || user.photoURL;

    updateUserProfile(realName, realPhoto)
      .then(() => {
        console.log("Updating with:", name, photo);
        toast.success("Profile Updated Successfully!");
      })
      .catch(error => toast.error(error.message));
  };

  return (
   
    <div className="flex flex-col items-center gap-5 py-10 px-4 min-h-[calc(100vh-200px)]">
      <Helmet>
                <title>Career Hub | My Profile</title>
            </Helmet>
      
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Welcome, {user?.displayName}
      </h2>

      <div className="relative group">
        <img 
          src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} 
          alt="Profile" 
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-primary object-cover shadow-lg" 
        />
      </div>

      <p className="text-gray-600 font-medium">Email: {user?.email}</p>

      
      <div className="card bg-base-100 w-full max-w-md shadow-2xl border border-base-300">
        <form onSubmit={handleUpdate} className="card-body p-6 md:p-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Update Name</span>
            </label>
            <input 
              type="text" 
              defaultValue={user?.displayName} 
              name="name" 
              placeholder="New Name" 
              className="input input-bordered focus:border-primary" 
            />
          </div>

          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text font-semibold">Update Photo URL</span>
            </label>
            <input 
              defaultValue={user?.photoURL} 
              type="text" 
              name="photo" 
              placeholder="New Photo URL" 
              className="input input-bordered focus:border-primary" 
            />
          </div>

          <button className="btn btn-primary mt-6 text-white uppercase tracking-wider shadow-md">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;