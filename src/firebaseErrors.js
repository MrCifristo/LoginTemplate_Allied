// src/firebaseErrors.js
const firebaseErrors = {
    "auth/email-already-in-use": "This email is already in use. Please use a different email.",
    "auth/invalid-email": "The email address is badly formatted.",
    "auth/operation-not-allowed": "This operation is not allowed. Please contact support.",
    "auth/weak-password": "The password is too weak. Please use a stronger password.",
    "auth/user-disabled": "The user account has been disabled by an administrator.",
    "auth/user-not-found": "No user found with this email.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/invalid-credential": "The email or password is incorrect. Please try again.",
    // Add more error codes and messages as needed
};

export default firebaseErrors;
