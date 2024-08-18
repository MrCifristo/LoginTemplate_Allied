// src/components/UserProfile.jsx
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const UserProfile = ({ user }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Si el usuario no está definido, redirigir al login
        if (!user) {
            navigate('/');
        }
    }, [user, navigate]);

    if (!user) {
        return null;  // No renderizar nada si el usuario no está autenticado
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-center dark:text-white">User Profile</h1>
                <p className="text-gray-900 dark:text-gray-300"><strong>ID:</strong> {user.id}</p>
                <p className="text-gray-900 dark:text-gray-300"><strong>UserName:</strong> {user.userName}</p>
                <p className="text-gray-900 dark:text-gray-300"><strong>Email:</strong> {user.email}</p>
                <p className="text-gray-900 dark:text-gray-300"><strong>Roles:</strong> {user.roles.join(', ')}</p>
                <p className="text-gray-900 dark:text-gray-300"><strong>Verified:</strong> {user.isVerified ? 'Yes' : 'No'}</p>
                <p className="text-gray-900 dark:text-gray-300"><strong>JWT Token:</strong> {user.jwToken}</p>
            </div>
        </div>
    );
};

UserProfile.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        roles: PropTypes.arrayOf(PropTypes.string).isRequired,
        isVerified: PropTypes.bool.isRequired,
        jwToken: PropTypes.string.isRequired,
    }),
};

export default UserProfile;
