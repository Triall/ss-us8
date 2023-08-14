import * as actionTypes from './actionTypes';
import { setFirstName, setLastName, setEmail, setMessage } from './index';

describe('user actions', () => {
    it('should create an action to set the first name', () => {
        const expectedAction = {
            type: actionTypes.SET_FIRST_NAME,
            payload: 'John'
        };
        expect(setFirstName('John')).toEqual(expectedAction);
    });

    it('should create an action to set the last name', () => {
        const expectedAction = {
            type: actionTypes.SET_LAST_NAME,
            payload: 'Doe'
        };
        expect(setLastName('Doe')).toEqual(expectedAction);
    });

    it('should create an action to set the email', () => {
        const expectedAction = {
            type: actionTypes.SET_EMAIL,
            payload: 'john.doe@example.com'
        };
        expect(setEmail('john.doe@example.com')).toEqual(expectedAction);
    });

    it('should create an action to set the message', () => {
        const expectedAction = {
            type: actionTypes.SET_MESSAGE,
            payload: 'Hello World'
        };
        expect(setMessage('Hello World')).toEqual(expectedAction);
    });
});
