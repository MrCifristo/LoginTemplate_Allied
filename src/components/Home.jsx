// src/components/Home.jsx
import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Home = ({ onLogin }) => {  // Asegúrate de que Home reciba onLogin como prop
    const [showLogin, setShowLogin] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleLoginForm = () => {
        setShowLogin(!showLogin);
    };

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center transition-colors duration-500">
            <button
                onClick={toggleLoginForm}
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 fixed top-4 right-4 z-20"
            >
                {showLogin ? 'Close' : 'Sign In'}
            </button>
            <button
                onClick={toggleDarkMode}
                className={`fixed top-4 left-4 z-20 ${isDarkMode ? 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 dark:focus:ring-gray-700' : 'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'}`}
            >
                {isDarkMode ? 'Light' : 'Dark'}
            </button>
            <h1 className="text-4xl font-bold mb-8 text-center z-20 text-gray-900 dark:text-white">Welcome to Our Site</h1>
            <div className={`relative z-20 w-full flex justify-center transition-opacity duration-500 ${showLogin ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {showLogin && (
                    <LoginForm onLogin={onLogin} />
                )}
            </div>
        </div>
    );
};

export default Home;
