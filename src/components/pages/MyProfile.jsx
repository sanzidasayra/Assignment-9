import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import Navbar from './Navbar';

const MyProfile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [email] = useState(user?.email || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      await updateUser({ displayName: name, photoURL });
      toast.success('Profile updated successfully');

      setUser((prev) => ({
        ...prev,
        displayName: name,
        photoURL,
      }));

      setIsEditing(false);
    } catch (error) {
      toast.error('Failed to update profile');
      console.error('Profile update error:', error);
    }
  };

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center bg-blue-100 bg-cover"
        style={{
          backgroundImage: 'url(https://www.transparenttextures.com/patterns/snow.png)',
        }}
      >
        <div className="max-w-xl w-full p-6 bg-white/90 shadow-xl rounded-lg backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">My Profile</h2>

          <form onSubmit={handleUpdateProfile} className="space-y-5">
            <div className="flex flex-col items-center">
              <img
                src={
                  photoURL ||
                  'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                }
                alt="User"
                className="w-24 h-24 rounded-full object-cover shadow-md"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!isEditing}
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Photo URL</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                disabled={!isEditing}
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded p-2 text-gray-500 cursor-not-allowed"
                value={email}
                disabled
              />
              <p className="text-xs text-gray-400 mt-1">
                *Emails are not changeable.
              </p>
            </div>

            <div className="flex justify-end gap-4 pt-2">
              {!isEditing ? (
                <button
                  type="button"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    onClick={() => {
                      setName(user?.displayName || '');
                      setPhotoURL(user?.photoURL || '');
                      setIsEditing(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
