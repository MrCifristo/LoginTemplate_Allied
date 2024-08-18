// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

const App = () => {
    const [user, setUser] = useState(null);

    const handleLogin = (userData) => {
        setUser(userData);  // Guardar la información del usuario al hacer login
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home onLogin={handleLogin} />} />
                <Route path="/profile" element={<UserProfile user={user} />} />
            </Routes>
        </Router>
    );
};

export default App;
