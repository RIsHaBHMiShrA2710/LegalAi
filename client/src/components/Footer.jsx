import React from "react"
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="copyRightArea">
                <div className="foot_container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p> &copy; Copyright {new Date().getFullYear()} All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
