import { useAuthStore } from "../store/auth.store";
import api from "./api";
import { DefaultResponse, ForgotPasswordRequest, LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, ResetPasswordRequest } from "@/app/types/auth";

export const login = async (
    payload: LoginRequest
    ): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>(
        "/auth/login",
        payload
    );

    return response.data;
};

export const register = async (
    payload: RegisterRequest
): Promise<RegisterResponse> => {
    const response = await api.post<RegisterResponse>(
        "/auth/register",
        payload
    );

    return response.data;
}

export const forgotpassword = async (
    payload: ForgotPasswordRequest
): Promise<DefaultResponse> => {
    const response = await api.post<DefaultResponse>(
        "/auth/forgot-password",
        payload
    );

    return response.data;
}

export const resetpassword = async (
    payload: ResetPasswordRequest
): Promise<DefaultResponse> => {
    const response = await api.post<DefaultResponse>(
        "/auth/reset-password",
        payload
    );

    return response.data;
}

// Need Authorization
export const logout = async () => {
    // Delete cookies from server
    const response = await api.post("/auth/logout");

    if (response.status == 200)
        useAuthStore.getState().logout();
}