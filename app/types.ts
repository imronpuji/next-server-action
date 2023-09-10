export type UserTypes = {
    username: string;
    password: string;
}

export type LoginResponse = {
    success: boolean;
    token: string;
}