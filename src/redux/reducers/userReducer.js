import * as actionTypes from '../actions/actionTypes';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_FIRST_NAME:
            return { ...state, firstName: action.payload };
        case actionTypes.SET_LAST_NAME:
            return { ...state, lastName: action.payload };
        case actionTypes.SET_EMAIL:
            return { ...state, email: action.payload };
        case actionTypes.SET_MESSAGE:
            return { ...state, message: action.payload };
        default:
            return state;
    }
}

export default userReducer;
