import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setFirstName, setLastName, setEmail, setMessage } from './redux/actions';
import { useValidation } from './useValidation';

function FormComponent() {
    const dispatch = useDispatch();

    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    };

    const [formState, setFormState, errors, validate] = useValidation(initialState);

    const handleChange = useCallback((e) => {
        setFormState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        if (validate()) {
            dispatch(setFirstName(formState.firstName));
            dispatch(setLastName(formState.lastName));
            dispatch(setEmail(formState.email));
            dispatch(setMessage(formState.message));
        }
    }, [validate, formState, dispatch]);

    const isSubmitDisabled = useMemo(() => {
        return Object.keys(errors).length > 0 ||
            !formState.firstName ||
            !formState.lastName ||
            !formState.email ||
            !formState.message;
    }, [errors, formState]);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            {errors.firstName && <p>{errors.firstName}</p>}

            <input
                type="text"
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            {errors.lastName && <p>{errors.lastName}</p>}

            <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Email"
            />
            {errors.email && <p>{errors.email}</p>}

            <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Message"
            ></textarea>
            {errors.message && <p>{errors.message}</p>}

            <button type="submit" disabled={isSubmitDisabled}>
                Submit
            </button>
        </form>
    );
}

export default FormComponent;
