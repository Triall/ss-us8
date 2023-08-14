import userReducer from './userReducer';
import * as actionTypes from '../actions/actionTypes';

describe('user reducer', () => {
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    };

    it('should return the initial state', () => {
        expect(userReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle SET_FIRST_NAME', () => {
        expect(userReducer(initialState, {
            type: actionTypes.SET_FIRST_NAME,
            payload: 'John'
        })).toEqual({ ...initialState, firstName: 'John' });
    });

    it('should handle SET_LAST_NAME', () => {
        expect(userReducer(initialState, {
            type: actionTypes.SET_LAST_NAME,
            payload: 'Doe'
        })).toEqual({ ...initialState, lastName: 'Doe' });
    });

    it('should handle SET_EMAIL', () => {
        expect(userReducer(initialState, {
            type: actionTypes.SET_EMAIL,
            payload: 'john.doe@example.com'
        })).toEqual({ ...initialState, email: 'john.doe@example.com' });
    });

    it('should handle SET_MESSAGE', () => {
        expect(userReducer(initialState, {
            type: actionTypes.SET_MESSAGE,
            payload: 'Hello World'
        })).toEqual({ ...initialState, message: 'Hello World' });
    });
});
