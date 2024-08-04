import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Home = () => {
    const [showLogin, setShowLogin] = useState(false);

    const toggleLoginForm = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 bg-cover bg-center w-4/5 h-3/4" >
            <button
                onClick={toggleLoginForm}
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 fixed top-4 right-4 z-20"
            >
                {showLogin ? 'Hide Login Form' : 'Show Login Form'}
            </button>
            <h1 className="text-4xl font-bold text-black text-center z-20">Welcome to Your Home</h1>
            <div className={`relative z-20 w-full flex justify-center transition-opacity duration-500 ${showLogin ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {showLogin && (
                    <LoginForm
                        onLogin={(email, password) => {
                            console.log('Login attempt with:', email, password);
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;
