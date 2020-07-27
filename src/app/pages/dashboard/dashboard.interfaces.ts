export interface UserLogin {
    login: string;
    email: string;
    real_name: string
    status: string;
    coins: number;
    create_time: string;
}

export interface CHPass {
    current_password: string;
    new_password: string;
    new_password_again: string
}
