import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Autocomplete from './frontend/autocomplete'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    // ReactDOM.render(<Clock/>, root);
    ReactDOM.render(<Tabs/>, root);
    ReactDOM.render(<Autocomplete arr=()]/>, root);
});

