import React, { useEffect, useState } from "react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import { FaCircleUser } from "react-icons/fa6";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [updateMessage, setUpdateMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setUsername(currentUser.displayName || "");
                setPhotoUrl(currentUser.photoURL || "");
            } else {
                navigate("/login");
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setUpdateMessage("");

        try {
            await updateProfile(auth.currentUser, {
                displayName: username,
                photoURL: photoUrl,
            });
            setUser((prevUser) => ({
                ...prevUser,
                displayName: username,
                photoURL: photoUrl,
            }));
            setUpdateMessage("Profile updated successfully!");
            setIsEditing(false); // Exit editing mode after successful update
        } catch (error) {
            setUpdateMessage(
                error.message || "An error occurred while updating the profile."
            );
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-6">
            <div className="w-full max-w-lg rounded-lg shadow-md p-8 hover:shadow-xl bg-white">
                {/* Profile Picture */}
                <div className="flex justify-center items-center mb-6">
                    {user.photoURL ? (
                        <img
                            src={user.photoURL}
                            alt="User"
                            className="w-[160px] h-[160px] rounded-full border-4 border-gray-300"
                        />
                    ) : (
                        <div className="rounded-full flex items-center">
                            <FaCircleUser className="w-[160px] h-[160px]" />
                        </div>
                    )}
                </div>

                {/* Profile Info */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700">
                        {user.displayName || "No Name"}
                    </h2>
                    <p className="text-gray-500">{user.email}</p>
                </div>

                {/* Editing Form or Update Profile Button */}
                {isEditing ? (
                    <form onSubmit={handleUpdateProfile} className="space-y-6">
                        {/* Username Input */}
                        <div className="form-control">
                            <label className="label text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder="Enter new username"
                                className="input input-bordered w-full px-4 py-2"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        {/* Photo URL Input */}
                        <div className="form-control">
                            <label className="label text-sm font-medium text-gray-700">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                placeholder="Enter new photo URL"
                                className="input input-bordered w-full px-4 py-2"
                                value={photoUrl}
                                onChange={(e) => setPhotoUrl(e.target.value)}
                            />
                        </div>

                        {/* Save & Cancel Buttons */}
                        <div className="flex justify-center gap-4">
                            <button
                                type="submit"
                                className="btn bg-black text-white hover:bg-gray-800 w-full sm:w-auto py-2 rounded-md"
                            >
                                Save Changes
                            </button>
                            <button
                                type="button"
                                className="btn bg-gray-300 text-black hover:bg-gray-400 w-full sm:w-auto py-2 rounded-md"
                                onClick={() => setIsEditing(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="flex justify-center">
                        <button
                            className="btn bg-black text-white text-center hover:bg-gray-800 w-full sm:w-auto py-2 rounded-md mx-auto"
                            onClick={() => setIsEditing(true)}
                        >
                            Update Profile
                        </button>
                    </div>
                )}

                {/* Update Message */}
                {updateMessage && (
                    <p
                        className={`mt-6 text-center text-sm font-medium ${
                            updateMessage.includes("successfully")
                                ? "text-green-600"
                                : "text-red-600"
                        }`}
                    >
                        {updateMessage}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Profile;