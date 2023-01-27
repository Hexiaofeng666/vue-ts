export interface LoginFormInt {
    userName: string,
    password: string
}

export class initData {
    loginForm: LoginFormInt = {
        userName: '',
        password: '',
    }
}
