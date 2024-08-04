// src/App.jsx
import React from 'react';
import LoginForm from './components/LoginForm';

const App = () => {
    const handleLogin = (email, password) => {
        // Lógica de autenticación aquí
        console.log('Login attempt with:', email, password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <LoginForm title="BrokersBloc" logoSrc="https://media.tenor.com/BIn4gjem0LQAAAAj/naruto-hungry.gif" onLogin={handleLogin} />
        </div>
    );
};

export default App;
