import { renderHook, act } from '@testing-library/react';
import { useValidation } from './useValidation';

describe('useValidation', () => {
    it('should initialize with given initialState', () => {
        const initialState = {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        };
        const { result } = renderHook(() => useValidation(initialState));

        expect(result.current[0]).toEqual(initialState);
        expect(result.current[2]).toEqual({});
    });

    it('should validate correctly and return errors for empty fields', () => {
        const initialState = {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        };
        const { result } = renderHook(() => useValidation(initialState));

        act(() => {
            result.current[3](); // Call validate function
        });

        expect(result.current[2]).toEqual({
            firstName: "First name is required",
            lastName: "Last name is required",
            email: "Email is required",
            message: "Message is required"
        });
    });

    it('should validate email format correctly', () => {
        const initialState = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe',
            message: 'Hello'
        };
        const { result } = renderHook(() => useValidation(initialState));

        act(() => {
            result.current[3]();
        });

        expect(result.current[2]).toEqual({
            email: "Email is not valid"
        });
    });

    it('should validate correctly without errors for valid data', () => {
        const initialState = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            message: 'Hello'
        };
        const { result } = renderHook(() => useValidation(initialState));

        act(() => {
            result.current[3]();
        });

        expect(result.current[2]).toEqual({});
    });
});
