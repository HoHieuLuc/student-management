export interface Token {
    token: string;
    type: string;
}

export interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
}

export interface LoginVars {
    username: string;
    password: string;
}

export interface RegisterVars {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface RegisterResponse extends Token {
    user: User;
}