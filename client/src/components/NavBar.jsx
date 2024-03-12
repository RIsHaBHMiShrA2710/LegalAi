import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleBalanced, faGavel, faBars } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, Form, Spinner } from 'react-bootstrap';
import axios from 'axios';
import './NavBar.css';
import { useAuth } from './context/AuthContext';


const NavBar = () => {
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [registrationData, setRegistrationData] = useState({ username: '', password: '' });
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [loginLoading, setLoginLoading] = useState(false);
    const [burgerOpen, setBurgerOpen] = useState(false);
    const { user, login, logout } = useAuth();
    const handleLogout = () => {
        try {
            logout();
            window.location.reload();
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen);
    };

    const handleRegister = async () => {
        try {
            const response = await axios.post("https://samvidhanai-1ogw.onrender.com/register", {
                username: registrationData.username,
                password: registrationData.password,
            });

            if (response.status === 200) {
                login(response.data.jwtToken, response.data.user);
                setShowRegisterModal(false);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleLogin = async () => {
        setLoginLoading(true);
        try {
            const response = await axios.post("https://samvidhanai-1ogw.onrender.com/login", {
                username: loginData.username,
                password: loginData.password,
            });

            if (response.status === 200) { 
                login(response.data.jwtToken, response.data.user);
                setShowLoginModal(false);
            }
        } catch (error) {
            alert("Please try again with valid username and password");
            console.error("Error:", error);
        } finally {
            setLoginLoading(false);
        }
    };
    return (
        <>
            <nav className="Navbar_items">
                <h1 className="Navbar_links Navbar_heading">
                    Samvidhan.Ai <FontAwesomeIcon icon={faScaleBalanced} className="Navbar_logo" />
                </h1>
                <div className="burger" onClick={toggleBurger}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <ul className={`Navbar_menu ${burgerOpen ? 'active' : ''}`}>
                    <li>
                        
                            <a href="https://legislative.gov.in/constitution-of-india/" className="Navbar_links">
                                <FontAwesomeIcon icon={faGavel}/> Legal Laws
                            </a>
                        
                    </li>
                    <li>
                        {user ? (
                            <Button variant="link" onClick={handleLogout} className="Navbar_links">
                                Logout
                            </Button>
                        ) : (
                            <>
                                    <Button variant="link" onClick={() => setShowRegisterModal(true)} className="Navbar_links Navbar_links_register">Register</Button>
                                    <Button variant="link" onClick={() => setShowLoginModal(true)} className="Navbar_links Navbar_links_login">Login</Button>
                                
                                
                            </>
                        )}
                    </li>
                </ul>
            </nav>

            {/* Registration Modal */}
            <Modal show={showRegisterModal} onHide={() => setShowRegisterModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="registerUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={registrationData.username}
                                onChange={(e) =>
                                    setRegistrationData({ ...registrationData, username: e.target.value })
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId="registerPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={registrationData.password}
                                onChange={(e) =>
                                    setRegistrationData({ ...registrationData, password: e.target.value })
                                }
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowRegisterModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleRegister}>
                        Register
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Login Modal */}
            <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="loginUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={loginData.username}
                                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="loginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={loginData.password}
                                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowLoginModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleLogin} disabled={loginLoading}>
                        {loginLoading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Login'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default NavBar;