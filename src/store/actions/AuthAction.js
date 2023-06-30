export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';

export const signUp = (username, email, password) => {
    return {
        type: SIGN_UP,
        payload: {
            username,
            email,
            password
        }
    }
}

export const signIn = (username, password) => {
    return {
        type: SIGN_UP,
        payload: {
            userName: username,
            Password: password,
        }
    }
}

