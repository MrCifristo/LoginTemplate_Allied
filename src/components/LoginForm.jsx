// src/components/LoginForm.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import InputField from './InputField';
import LoginButton from './LoginButton';
import { AuthService } from '../services/AuthService';

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await AuthService(email, password);

        if (result.success && result.data) {  // Verificar que result.data esté definido
            console.log('Login successful! Token:', result.data.jwToken);
            onLogin(result.data);  // Pasar la información del usuario al componente App.jsx
            navigate('/profile');  // Redirigir a la página de perfil
        } else {
            setError(result.errors && result.errors[0] ? result.errors[0].error : 'An error occurred');  // Mostrar el primer error si la autenticación falla
            console.log('Login failed! Errors:', result.errors);
        }
    };

    return (
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow dark:border dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <Logo src="https://media.tenor.com/BIn4gjem0LQAAAAj/naruto-hungry.gif" alt="Company Name" />
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                    Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                    <InputField
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputField
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                    )}
                    <LoginButton label="Sign in" onClick={handleLogin} />
                </form>
            </div>
        </div>
    );
};

LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
