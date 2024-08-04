// src/components/Home.jsx
import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Home = () => {
    const [showLogin, setShowLogin] = useState(false);

    const toggleLoginForm = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 relative">
            <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Our Site</h1>
            <img
                src="https://external-preview.redd.it/OEgDJQxhyaWWV37Bxmn2jCCQMkuebzvjy6_3YcPiWGU.jpg?auto=webp&s=e9879ff3a85942bc35e4f152621f3bd95cc46ea7"
                alt="Placeholder"
                className="w-32 h-32 mb-8"
            />
            <button
                onClick={toggleLoginForm}
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 fixed top-4 right-4"
            >
                {showLogin ? 'Close' : 'Sign in'}
            </button>
            {showLogin && (
                <div className="w-full flex justify-center mt-8">
                    <LoginForm
                        title="Flowbite"
                        logoSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        onLogin={(email, password) => {
                            console.log('Login attempt with:', email, password);
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default Home;
