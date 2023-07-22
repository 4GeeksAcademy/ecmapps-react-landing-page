import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid d-flex">
                <a class="navbar-brand" href="#"><strong>Start Bootstrap</strong></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className='w-100'></div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"><strong>Home</strong></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#"><strong>About</strong></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#"><strong>Services</strong></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#"><strong>Contact</strong></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;