import React from 'react';

import './DrawerToggle.css';

const drawerToggle = props => (
    <button className="toggle-button">
        <div className="toggleLine"/>
        <div className="toggleLine"/>
        <div className="toggleLine"/>
    </button>
);

export default drawerToggle;