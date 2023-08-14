import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch } from 'react-redux';
import FormComponent from './FormComponent';
import { setFirstName, setLastName, setEmail, setMessage } from './redux/actions';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

describe('FormComponent', () => {
    let mockDispatch;

    beforeEach(() => {
        mockDispatch = jest.fn();
        useDispatch.mockReturnValue(mockDispatch);
    });

    it('renders without crashing', () => {
        render(<FormComponent />);
    });

    it('updates input values correctly', () => {
        const { getByPlaceholderText } = render(<FormComponent />);
        const firstNameInput = getByPlaceholderText('First Name');

        act(() => {
            userEvent.type(firstNameInput, 'John');
        });

        expect(firstNameInput.value).toBe('John');
    });

    it('shows errors when required fields have invalid values', () => {
        const { getByText, queryByText, getByPlaceholderText } = render(<FormComponent />);

        act(() => {
            userEvent.type(getByPlaceholderText('First Name'), 'John');
            userEvent.type(getByPlaceholderText('Last Name'), 'Doe');
            userEvent.type(getByPlaceholderText('Email'), 'john.doe'); // Invalid email format
            userEvent.type(getByPlaceholderText('Message'), 'Hello');
        });

        const submitButton = getByText('Submit');
        fireEvent.click(submitButton);

        expect(queryByText('First name is required')).not.toBeInTheDocument();
        expect(queryByText('Last name is required')).not.toBeInTheDocument();
        expect(queryByText('Email is not valid')).toBeInTheDocument();
        expect(queryByText('Message is required')).not.toBeInTheDocument();
    });

    it('dispatches form data correctly when form is valid', () => {
        const { getByText, getByPlaceholderText } = render(<FormComponent />);

        act(() => {
            userEvent.type(getByPlaceholderText('First Name'), 'John');
            userEvent.type(getByPlaceholderText('Last Name'), 'Doe');
            userEvent.type(getByPlaceholderText('Email'), 'john.doe@example.com');
            userEvent.type(getByPlaceholderText('Message'), 'Hello World');
        });

        fireEvent.click(getByText('Submit'));

        expect(mockDispatch).toHaveBeenCalledWith(setFirstName('John'));
        expect(mockDispatch).toHaveBeenCalledWith(setLastName('Doe'));
        expect(mockDispatch).toHaveBeenCalledWith(setEmail('john.doe@example.com'));
        expect(mockDispatch).toHaveBeenCalledWith(setMessage('Hello World'));
    });
});
