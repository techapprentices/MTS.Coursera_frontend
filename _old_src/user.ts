import { axiosNoAuth } from './base';
import TokenStorage from './token';

export interface UserAuthResponse {
  token: string;
}

export default async function authorizeUser(login: string, password: string): Promise<unknown> {
  const response = await axiosNoAuth.post<UserAuthResponse>('/api/auth', { login, password });
    return TokenStorage.setToken(response.data.token);
}