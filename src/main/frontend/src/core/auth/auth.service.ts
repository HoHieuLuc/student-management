import { LoginVars, RegisterResponse, RegisterVars, Token, User } from './auth.type';
import axiosClient from '~/lib/axios-client';

const login = async (creds: LoginVars) => {
    const { data } = await axiosClient.post<Token>(
        `/api/v1/auth/login`,
        creds
    );
    return data;
};

const register = async (creds: RegisterVars) => {
    const { data } = await axiosClient.post<RegisterResponse>('/api/v1/auth/register', creds);
    return data;
};

const me = async () => {
    const { data } = await axiosClient.get<User>(`/api/v1/auth/me`);
    return data;
};

export default {
    register,
    login,
    me,
};