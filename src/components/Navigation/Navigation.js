import React from 'react';
import { withRouter, Link, NavLink } from 'react-router-dom';
import * as Icon from 'react-feather';
import './Navigation.css';
import {
    Navbar, 
    Nav, 
    NavDropdown, 
    Container, 
    Row, 
    Col, 
    Form, 
    FormControl, 
    Button, 
    Image
} from 'react-bootstrap';

import ColorSwitch from '../Common/ColorSwitch';

// Default dark side menu
import SideMenuDark from './SideMenu/SideMenuDark';
// If want to active light sidebar then please uncomment below & comment above component
import SideMenuLight from './SideMenu/SideMenuLight';

// Logo image path
import Logo from '../../assets/img/logo.png';
import SmallLogo from '../../assets/img/small-logo.png';

// Profile & user image path
import profile from '../../assets/img/profile.jpg';
import user1 from '../../assets/img/user/user1.jpg';
import user2 from '../../assets/img/user/user2.jpg';
import user3 from '../../assets/img/user/user3.jpg';

class Navigation extends React.Component {
    state = {
        sideMenu: false,
        term: '',
        menuColor: false
    };

    _toggleClass = () => {
        const currentSideMenu = this.state.sideMenu;
        this.setState({sideMenu: !currentSideMenu});
        this.props.onClick(this.state.sideMenu);
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.term){
            this.props.history.push('/search/');
        }
    }

    onSideMenuHandler = (activeColor) => {
        this.setState({menuColor: activeColor})
    }

    render() {
        return (
            <div className="page-wrapper">
                <Navbar fixed="top" className="top-menu">
                    <Link to="/dashboard" className={`navbar-brand ${this.state.sideMenu ? 'navbar-logo' : ''}`}>
                        {/* Large logo */}
                        <Image src={Logo} alt="Logo" className="large-logo" /> 
                        {/* Small logo */}
                        <Image src={SmallLogo} alt="Small Logo" className="small-logo" /> 
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* Burger menu */}
                    <div className={`burger-menu ${this.state.sideMenu ? 'toggle-menu' : ''}`} onClick={this._toggleClass}>
                        <span className="top-bar"></span>
                        <span className="middle-bar"></span>
                        <span className="bottom-bar"></span> 
                    </div>
                    {/* End Burger menu */}

                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <h3 style={{ color: 'blue' }}><b>The Lilongwe Water and Sanitation Project</b></h3>

                        <Nav className="ml-auto right-nav">
                            <NavDropdown  
                                title={
                                    <div className="count-info">
                                        <Icon.Mail 
                                            className="icon"
                                        />
                                        <span className="ci-number theme-bg">
                                            <span className="ripple theme-bg"></span>
                                            <span className="ripple theme-bg"></span>
                                            <span className="ripple theme-bg"></span>
                                        </span>
                                    </div>
                                } 
                                id="basic-nav-dropdown" className="message-box d-none d-sm-block">
                                
                                <NavLink to="#" className="dropdown-item">
                                    <div className="message-item">
                                        <span className="user-pic">
                                            <Image src={user1} alt="User Image" roundedCircle /> 
                                            <span className="profile-status online"></span>
                                        </span>
                                    
                                        <span className="chat-content">
                                            <h5 className="message-title">Aaron Rossi</h5> 
                                            <span className="mail-desc">Just sent a new comment!</span>
                                        </span>
                                        <span className="time">0 seconds ago</span>
                                    </div>
                                </NavLink>

                                <NavLink to="#" className="dropdown-item">
                                    <div className="message-item">
                                        <span className="user-pic">
                                            <Image src={user2} alt="User Image" roundedCircle /> 
                                            <span className="profile-status ofline"></span>
                                        </span>
                                    
                                        <span className="chat-content">
                                            <h5 className="message-title">Marco Gomez</h5> 
                                            <span className="mail-desc">Just sent a new comment!</span>
                                        </span>
                                        <span className="time">5 minutes ago</span>
                                    </div>
                                </NavLink>

                                <NavLink to="#" className="dropdown-item">
                                    <div className="message-item">
                                        <span className="user-pic">
                                            <Image src={user3} alt="User Image" roundedCircle /> 
                                            <span className="profile-status away"></span>
                                        </span>
                                    
                                        <span className="chat-content">
                                            <h5 className="message-title">Mitch Petty</h5> 
                                            <span className="mail-desc">Just sent a new comment!</span>
                                        </span>
                                        <span className="time">9:00 AM</span>
                                    </div>
                                </NavLink>

                                <Link to="/inbox/" className="dropdown-item">
                                    See all e-mails 
                                    <Icon.ChevronRight 
                                        className="icon"
                                    />
                                </Link>
                            </NavDropdown>

                            <NavDropdown  
                                title={
                                    <div className="count-info">
                                        <Icon.Bell 
                                            className="icon"
                                        />
                                        <span className="ci-number">
                                            <span className="ripple"></span>
                                            <span className="ripple"></span>
                                            <span className="ripple"></span>
                                        </span>
                                    </div>
                                } 
                                id="basic-nav-dropdown" className="message-box">

                                <NavLink to="#" className="dropdown-item">
                                    <div className="message-item">
                                        <span className="user-pic">
                                            <Image src={user1} alt="User Image" roundedCircle /> 
                                            <span className="profile-status online"></span>
                                        </span>
                                    
                                        <span className="chat-content">
                                            <h5 className="message-title">Aaron Rossi</h5> 
                                            <span className="mail-desc">Just sent a new comment!</span>
                                        </span>
                                        <span className="time">0 seconds ago</span>
                                    </div>
                                </NavLink>

                                <NavLink to="#" className="dropdown-item">
                                    <div className="message-item">
                                        <span className="user-pic">
                                            <Image src={user2} alt="User Image" roundedCircle /> 
                                            <span className="profile-status ofline"></span>
                                        </span>
                                    
                                        <span className="chat-content">
                                            <h5 className="message-title">Marco Gomez</h5> 
                                            <span className="mail-desc">Just sent a new comment!</span>
                                        </span>
                                        <span className="time">5 minutes ago</span>
                                    </div>
                                </NavLink>

                                <NavLink to="#" className="dropdown-item">
                                    <div className="message-item">
                                        <span className="user-pic">
                                            <Image src={user3} alt="User Image" roundedCircle /> 
                                            <span className="profile-status away"></span>
                                        </span>
                                    
                                        <span className="chat-content">
                                            <h5 className="message-title">Mitch Petty</h5> 
                                            <span className="mail-desc">
                                                New order received! <span className="amount">$250</span>
                                            </span>
                                        </span>
                                        <span className="time">9:00 AM - 02-02-2019</span>
                                    </div>
                                </NavLink>
                                
                                <Link to="/notifications/" className="dropdown-item">
                                    Check all notifications
                                    <Icon.ChevronRight 
                                        className="icon"
                                    />
                                </Link>
                            </NavDropdown>

                            <NavDropdown  
                                title={
                                    <div className="menu-profile">
                                        <span className="name">Aaron Rossi</span> 
                                        <Image src={profile} alt="Profile Image" roundedCircle /> 
                                    </div>
                                } 
                                id="basic-nav-dropdown" className="profile-nav-item">
                                <NavLink to="/profile/" className="dropdown-item">
                                    <Icon.User 
                                        className="icon"
                                    /> 
                                    Profile
                                </NavLink>
                                <NavLink to="/inbox/" className="dropdown-item">
                                    <Icon.Inbox 
                                        className="icon"
                                    /> 
                                    Mailbox
                                </NavLink>
                                <NavLink to="/chat/" className="dropdown-item">
                                    <Icon.HelpCircle 
                                        className="icon"
                                    /> 
                                    Support
                                </NavLink>
                                <NavLink to="/profile-settings/" className="dropdown-item">
                                    <Icon.Settings 
                                        className="icon"
                                    /> 
                                    Settings
                                </NavLink>
                                <NavLink to="/login/" className="dropdown-item">
                                    <Icon.LogOut 
                                        className="icon"
                                    />
                                    Logout
                                </NavLink>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse> 
                </Navbar>    
                
                {/* Side Menu File Path: src/components/Navigation/SideMenu/SideMenu.js */}
                {
                    !this.state.menuColor ? <SideMenuDark sideMenu={this.state.sideMenu} /> : <SideMenuLight sideMenu={this.state.sideMenu} />
                    
                }
                

                {/*  */}
                
                {/* Side Menu File Path: src/components/Common/ColorSwitch.js */}
                <ColorSwitch onClick={this.onSideMenuHandler} />
            </div>
        );
    }
}

export default withRouter(Navigation);