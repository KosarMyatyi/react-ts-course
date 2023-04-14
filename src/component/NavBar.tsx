import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <NavLink to='/users'>Пользователи</NavLink>
            <NavLink to='/todos'>Список дел</NavLink>
        </div>
    );
};

export default NavBar;