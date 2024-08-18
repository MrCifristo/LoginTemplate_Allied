// src/services/AuthService.jsx
import { authenticate } from './api.jsx';

export const AuthService = async (email, password) => {
    const result = await authenticate(email, password);

    if (result.success) {
        // Si la autenticación es exitosa, devolver los datos del usuario
        return {
            data: result.data,
            success: true,
            errors: null,
        };
    } else {
        // Si falla, devolver los errores
        return {
            data: null,
            success: false,
            errors: result.errors,
        };
    }
};
