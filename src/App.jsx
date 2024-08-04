// src/App.jsx
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const App = () => {
    const [isRegister, setIsRegister] = useState(false);

    const handleLogin = (email, password) => {
        // Lógica de autenticación aquí
        console.log('Login attempt with:', email, password);
    };

    const toggleForm = () => {
        setIsRegister(!isRegister);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            {isRegister ? (
                <RegisterForm onToggleForm={toggleForm} />
            ) : (
                <LoginForm onLogin={handleLogin} onToggleForm={toggleForm} />
            )}
        </div>
    );
};

export default App;
