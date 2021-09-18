import React, { Component } from 'react'

// Stateless Functional Component

const Navbar = ({ totalCounters }) => {
    console.log('Navbar - rendered')
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a
                    class="navbar-brand"
                    href="#">
                    Navbar by Programming with Mosh
                    <span className="badge rounded-pill bg-secondary m-2">
                        {totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

