import React from "react";


function Navbar() {
    return (
        <React.Fragment>
        <nav className="nav-links"> <br /> <br />
            <div className="nav-item">
                <a href="/">Home</a>
            </div>
            <div className="nav-item">
                <a href="#About">About</a>

            </div>
            <div className="nav-item">
                <a href="#About">Products</a>
                
                </div>
            <div className="nav-item">
                <a href="#About">Shop</a>
            </div>
            <div className="nav-item">

                <a href="#About">Blog</a>
            </div>
            <div className="nav-item">
                <a href="#About">Contact</a>
                </div>
        </nav>
    </React.Fragment>
    );
}

export default Navbar;