import { SIGN_UP, SIGN_IN } from '../actions/AuthAction';

const initialState ={
    users: [],
    isAuth: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SIGN_UP:
            const { username, email, password } = action.payload;
            const user = { username, email, password };
            return {
                ...state,
                users: state.users.concat(user),
                isAuth: false
            }
        case SIGN_IN:
            const { userName, Password } = action.payload;
            return {
                ...state,
            }
    }
    return state;
}


