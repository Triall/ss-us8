import * as actionTypes from './actionTypes';

export const setFirstName = (firstName) => ({
    type: actionTypes.SET_FIRST_NAME,
    payload: firstName
});

export const setLastName = (lastName) => ({
    type: actionTypes.SET_LAST_NAME,
    payload: lastName
});

export const setEmail = (email) => ({
    type: actionTypes.SET_EMAIL,
    payload: email
});

export const setMessage = (message) => ({
    type: actionTypes.SET_MESSAGE,
    payload: message
});
