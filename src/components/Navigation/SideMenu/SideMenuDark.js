import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import * as Icon from 'react-feather';
import './SideMenu.css';

class SideMenuDark extends React.Component {
    render() { 
        return (
            <div className={`sidemenu-area ${this.props.sideMenu ? 'sidemenu-toggle' : ''}`}>
                <Navbar className={`sidemenu ${this.props.sideMenu ? 'hide-nav-title' : ''}`} >
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown title= {
                                <div className="dropdown-title">
                                    <Icon.Grid 
                                        className="icon"
                                    /> 
                                    <span className="title">
                                        Dashboard 
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        /> 
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                                <NavLink 
                                    to="/dashboard/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    LWSP Default
                                </NavLink>
                                
                            </NavDropdown>


                            <NavDropdown 
                                className="super-color" 
                                title= {
                                    <div className="dropdown-title">
                                        <Icon.Code 
                                            className="icon"
                                        />
                                        <span className="title">
                                            System Administration
                                            <Icon.ChevronRight 
                                                className="icon fr"
                                            />
                                        </span>
                                    </div>
                                }
                                id="basic-nav-dropdown">
                                <NavLink  
                                    activeClassName="drpMenu"
                                    to="/contractor-management/" 
                                    className="dropdown-item">
                                    <Icon.UserX 
                                        className="icon" 
                                    />
                                    Contractor Management
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/products-services/" 
                                    className="dropdown-item"> 
                                    <Icon.UserX 
                                        className="icon" 
                                    /> 
                                    Products and Services
                                </NavLink>
                                
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/user-management/" 
                                    className="dropdown-item">
                                    <Icon.Users
                                        className="icon" 
                                    />
                                    User Management
                                </NavLink>
                            </NavDropdown>
                            
                            <NavDropdown 
                                className="super-color" 
                                title= {
                                    <div className="dropdown-title">
                                        <Icon.Filter 
                                            className="icon"
                                        />
                                        <span className="title">
                                            Household Beneficiaries
                                            <Icon.ChevronRight 
                                                className="icon fr"
                                            />
                                        </span>
                                    </div>
                                }
                                id="basic-nav-dropdown">
                                <NavLink  
                                    activeClassName="drpMenu"
                                    to="/registration/" 
                                    className="dropdown-item">
                                    <Icon.Database 
                                        className="icon" 
                                    />
                                    Registration
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/beneficiary-targeting/" 
                                    className="dropdown-item"> 
                                    <Icon.Database 
                                        className="icon" 
                                    /> 
                                    Targeting 
                                </NavLink>
                                
                            </NavDropdown>
                         
                            <NavDropdown 
                                className="super-color" 
                                title= {
                                    <div className="dropdown-title">
                                        <Icon.Filter 
                                            className="icon"
                                        />
                                        <span className="title">
                                            Request for OSS Service
                                            <Icon.ChevronRight 
                                                className="icon fr"
                                            />
                                        </span>
                                    </div>
                                }
                                id="basic-nav-dropdown">
                                <NavLink  
                                    activeClassName="drpMenu"
                                    to="/technology-choice/" 
                                    className="dropdown-item">
                                    <Icon.Database 
                                        className="icon" 
                                    />
                                    Technology Choice
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/tech-selection/" 
                                    className="dropdown-item"> 
                                    <Icon.Database 
                                        className="icon" 
                                    /> 
                                    Technology Selection 
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/tech-approval/" 
                                    className="dropdown-item">
                                    <Icon.Check 
                                        className="icon" 
                                    />
                                    Approval or Rejection
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/tech-cost/" 
                                    className="dropdown-item">
                                    <Icon.DollarSign
                                        className="icon" 
                                    />
                                    Technology Cost
                                </NavLink>
                            </NavDropdown>

                            <NavDropdown 
                                className="super-color" 
                                title= {
                                    <div className="dropdown-title">
                                        <Icon.Filter 
                                            className="icon"
                                        />
                                        <span className="title">
                                            Contribute for OSS Service
                                            <Icon.ChevronRight 
                                                className="icon fr"
                                            />
                                        </span>
                                    </div>
                                }
                                id="basic-nav-dropdown">
                                
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/payment/" 
                                    className="dropdown-item"> 
                                    <Icon.DollarSign 
                                        className="icon" 
                                    /> 
                                    Contribute for Service
                                </NavLink>
                                
                            </NavDropdown>

                            <NavDropdown 
                                className="super-color" 
                                title= {
                                    <div className="dropdown-title">
                                        <Icon.Filter 
                                            className="icon"
                                        />
                                        <span className="title">
                                            OSS Works
                                            <Icon.ChevronRight 
                                                className="icon fr"
                                            />
                                        </span>
                                    </div>
                                }
                                id="basic-nav-dropdown">
                                <NavLink  
                                    activeClassName="drpMenu"
                                    to="/contractor-allocation/" 
                                    className="dropdown-item">
                                    <Icon.ExternalLink
                                        className="icon" 
                                    />
                                    Contractor Allocation
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/works-start/" 
                                    className="dropdown-item"> 
                                    <Icon.Calendar 
                                        className="icon" 
                                    /> 
                                    Works Start
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/works-progress/" 
                                    className="dropdown-item">
                                    <Icon.List 
                                        className="icon" 
                                    />
                                    Work Status Updates
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/works-completion/" 
                                    className="dropdown-item">
                                    <Icon.Database
                                        className="icon" 
                                    />
                                    Works Completion
                                </NavLink>
                            </NavDropdown>

                            <NavDropdown 
                                className="super-color" 
                                title= {
                                    <div className="dropdown-title">
                                        <Icon.Filter 
                                            className="icon"
                                        />
                                        <span className="title">
                                            Project Reports
                                            <Icon.ChevronRight 
                                                className="icon fr"
                                            />
                                        </span>
                                    </div>
                                }
                                id="basic-nav-dropdown">
                                <NavLink  
                                    activeClassName="drpMenu"
                                    to="/household-reports/" 
                                    className="dropdown-item">
                                    <Icon.ExternalLink
                                        className="icon" 
                                    />
                                    Household Reports
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/area-reports/" 
                                    className="dropdown-item"> 
                                    <Icon.Calendar 
                                        className="icon" 
                                    /> 
                                    Block/Area Reports
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/project-reports/" 
                                    className="dropdown-item">
                                    <Icon.List 
                                        className="icon" 
                                    />
                                    Overall Reports
                                </NavLink>
                            </NavDropdown>
                            
                            <NavDropdown 
                                className="super-color" 
                                title= {
                                    <div className="dropdown-title">
                                        <Icon.Filter 
                                            className="icon"
                                        />
                                        <span className="title">
                                            Case Management
                                            <Icon.ChevronRight 
                                                className="icon fr"
                                            />
                                        </span>
                                    </div>
                                }
                                id="basic-nav-dropdown">
                                <NavLink  
                                    activeClassName="drpMenu"
                                    to="/complaints-received/" 
                                    className="dropdown-item">
                                    <Icon.ExternalLink
                                        className="icon" 
                                    />
                                    Received Complaints
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/complaints-status/" 
                                    className="dropdown-item"> 
                                    <Icon.Calendar 
                                        className="icon" 
                                    /> 
                                    Complaint Status
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/complaints-resolved/" 
                                    className="dropdown-item">
                                    <Icon.List 
                                        className="icon" 
                                    />
                                    Resolved Complaints
                                </NavLink>
                            </NavDropdown>
  
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default SideMenuDark;