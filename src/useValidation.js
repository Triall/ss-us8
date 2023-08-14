import { useState, useCallback } from 'react';

export function useValidation(initialState) {
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const validate = useCallback(() => {
        let newErrors = {};

        if (!data.firstName) newErrors.firstName = "First name is required";
        if (!data.lastName) newErrors.lastName = "Last name is required";
        if (!data.email) {
            newErrors.email = "Email is required";
        } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]+$/i.test(data.email)) {
            newErrors.email = "Email is not valid";
        }
        if (!data.message) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // if no errors, it's valid
    }, [data]);

    return [data, setData, errors, validate];
}
