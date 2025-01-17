// import React from 'react';
import PropTypes from 'prop-types';

const LoginButton = ({ label, onClick }) => (
    <button
        onClick={onClick}
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
        {label}
    </button>
);

LoginButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default LoginButton;
