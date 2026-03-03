/**
 * Auth service – handles login, register, token refresh, etc.
 */
import { apiClient } from "./client";
import { API_ENDPOINTS } from "@/lib/constants";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const authService = {
  login: (payload: LoginPayload) =>
    apiClient.post<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, payload),

  register: (payload: RegisterPayload) =>
    apiClient.post<AuthResponse>(API_ENDPOINTS.AUTH.REGISTER, payload),

  refresh: (refreshToken: string) =>
    apiClient.post<AuthResponse>(API_ENDPOINTS.AUTH.REFRESH, { refreshToken }),

  logout: () => apiClient.post(API_ENDPOINTS.AUTH.LOGOUT),
};
