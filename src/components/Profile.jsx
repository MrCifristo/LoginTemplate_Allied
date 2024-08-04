// src/components/Profile.jsx
import React from 'react';
import { auth, db } from '../firebaseConfig';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";

const Profile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = React.useState(null);

    React.useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (auth.currentUser) {
                    console.log("Current user:", auth.currentUser);
                    const docRef = doc(db, "users", auth.currentUser.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        console.log("Document data:", docSnap.data());
                        setUserData(docSnap.data());
                    } else {
                        console.log("No such document!");
                    }
                } else {
                    console.log("No user signed in, redirecting to home...");
                    navigate('/');
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleSignOut = async () => {
        await signOut(auth);
        navigate('/');
    };

    return (
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow dark:border dark:border-gray-700 p-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center mb-6">
                User Profile
            </h1>
            {userData ? (
                <div>
                    <p className="text-gray-900 dark:text-white">Email: {userData.email}</p>
                    <p className="text-gray-900 dark:text-white">Created At: {new Date(userData.createdAt).toDateString()}</p>
                    <button
                        onClick={handleSignOut}
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <p className="text-gray-900 dark:text-white">Loading...</p>
            )}
        </div>
    );
};

export default Profile;
