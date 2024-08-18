// src/services/api.jsx

export const authenticate = async (email, password) => {
    const root = 'https://localhost:5001';  // URL base simulada
    const endpoint = `${root}/api/v1/Account/Authenticate`;

    // Simulación de una llamada real al endpoint
    const simulatedResponse = simulateBackendResponse(email, password);

    return simulatedResponse;
};

// Simulación de la respuesta del backend
const simulateBackendResponse = (email, password) => {
    if (email === 'test@test.com' && password === 'password123') {
        return {
            data: {
                id: '83da2528-95c5-4f72-9e09-0629e26d1cf8',
                userName: 'Test',
                email: 'test@test.com',
                roles: [],
                isVerified: true,
                jwToken: 'simulated-jwt-token',
            },
            success: true,
            errors: null,
        };
    } else {
        return {
            data: null,
            success: false,
            errors: [{ error: 'Invalid credentials' }],
        };
    }
};
