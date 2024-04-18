import React from 'react';

function Navbar({ handleSearchInputChange }) {
    const navbarStyle = {
        backgroundColor: '#ADD8E6',
        position: 'sticky',
        top: '0',
        zIndex: '1000',
    };

    return (
        <nav className="navbar" style={navbarStyle}>
            <div className="container-fluid">
                <a className="navbar-brand">ProfileMaps</a>
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={handleSearchInputChange}
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
