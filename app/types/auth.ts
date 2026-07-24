export interface User {
    id: number;
    name: string;
    email: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    expiredAt: string;
    user: User;
}

// Register Section
export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

export interface RegisterResponse {
    id: number;
    name: string;
    email: string;
}

// Forgot Password Section
export interface ForgotPasswordRequest {
    email: string;
}

export interface ResetPasswordRequest {
    token: string;
    password: string;
}

// General Response
export interface DefaultResponse {
    success: number;
    message: string;
}

