import { LoginVars, RegisterResponse, RegisterVars, Token, User } from './auth.type';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import authService from './auth.service';
import { AxiosError } from 'axios';

const QUERY_KEYS = {
    me: ['auth', 'me']
};

const useLogin = () => {
    const queryClient = useQueryClient();
    return useMutation<Token, AxiosError, LoginVars>(authService.login, {
        onSuccess(data) {
            localStorage.setItem('token', data.token);
            return queryClient.invalidateQueries(QUERY_KEYS.me);
        },
    });
};

const useRegister = () => {
    const queryClient = useQueryClient();
    return useMutation<
        RegisterResponse, AxiosError, RegisterVars
    >(authService.register, {
        onSuccess(data) {
            localStorage.setItem('token', data.token);
            return queryClient.invalidateQueries(QUERY_KEYS.me);
        },
    });
};

const useLogout = () => {
    const queryClient = useQueryClient();
    return () => {
        localStorage.removeItem('token');
        void queryClient.resetQueries(QUERY_KEYS.me);
    };
};

const useCurrentUser = () => {
    return useQuery<User, AxiosError>(QUERY_KEYS.me, authService.me, {
        staleTime: Infinity,
        cacheTime: Infinity,
        onError: () => localStorage.removeItem('token')
    });
};

export default {
    useLogin,
    useLogout,
    useRegister,
    useCurrentUser,
};