import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import store from './redux/store';
import './index.css';
import FormComponent from "./FormComponent";
import DisplayData from "./DisplayData";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <FormComponent/>
            <DisplayData />
        </Provider>
    </React.StrictMode>
);
