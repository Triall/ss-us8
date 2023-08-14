import React from 'react';
import { useSelector } from 'react-redux';

const DisplayData = () => {
    const formData = useSelector(state => state.user);

    return (
        <table>
            <thead>
            <tr>
                <th>Field</th>
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>First Name</td>
                <td>{formData.firstName}</td>
            </tr>
            <tr>
                <td>Last Name</td>
                <td>{formData.lastName}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{formData.email}</td>
            </tr>
            <tr>
                <td>Message</td>
                <td>{formData.message}</td>
            </tr>
            </tbody>
        </table>
    );
};

export default DisplayData;
