import React, { useContext } from 'react';
import auth from '../../firebase/firebase.config';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from "react-toastify";

const Profile = () => {
  const {user,updateUserProfile} = useContext(AuthContext);

  const handleUpdate=(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    //jeno ekta save korle arekta change na hoy
    const realName= name|| user.displayName;
    const realPhoto = photo || user.photoURL;

    updateUserProfile(realName,realPhoto)
    .then(()=>{
      console.log("Updating with:", name, photo);
      toast.success("Profile Updated Successfully!");
    })
    .catch(error => toast.error(error.message));
  };
  return (
    <div className="flex flex-col items-center gap-5 py-10">
            <h2 className="text-3xl font-bold">Welcome, {user?.displayName}</h2>
            <img src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png" } alt="Profile" className="w-32 h-32 rounded-full border-4 border-primary" />
            <p>Email: {user?.email}</p>

            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <form onSubmit={handleUpdate} className="card-body">
                    <div className="form-control">
                        <label className="label"><span className="label-text">Update Name</span></label>
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="New Name" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Update Photo URL</span></label>
                        <input defaultValue={user?.photoURL} type="text" name="photo" placeholder="New Photo URL" className="input input-bordered"  />
                    </div>
                    <button className="btn btn-primary mt-4">Save Changes</button>
                </form>
            </div>
        </div>
  );
};

export default Profile;