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
                                    Default Dashboard
                                </NavLink>
                                <NavLink 
                                    to="/dashboard-two/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu"> 
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    eCommerce Dashboard
                                </NavLink>
                                <NavLink 
                                    to="/dashboard-three/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Analytics Dashboard
                                </NavLink>
                            </NavDropdown>

                            
                            <h6>Application Settings</h6>

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
                                    to="/roles-permissions/" 
                                    className="dropdown-item">
                                    <Icon.UserCheck 
                                        className="icon" 
                                    />
                                    Roles and Permissions
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
                            <h6>Beneficiaries</h6>

                            <NavLink to="/beneficiary-targeting/" className="nav-link">
                                <Icon.Database 
                                    className="icon"
                                /> 
                                <span className="title">Project Beneficiaries</span>
                            </NavLink>

                            <h6>OSS Delivery Components</h6>
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
                                    to="/payment-options/" 
                                    className="dropdown-item">
                                    <Icon.DollarSign 
                                        className="icon" 
                                    />
                                    Payment Options
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/payment/" 
                                    className="dropdown-item"> 
                                    <Icon.DollarSign 
                                        className="icon" 
                                    /> 
                                    Pay
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/payment-verification/" 
                                    className="dropdown-item">
                                    <Icon.Check 
                                        className="icon" 
                                    />
                                    Payment Verification
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/contribution-status/" 
                                    className="dropdown-item">
                                    <Icon.DollarSign
                                        className="icon" 
                                    />
                                    Contribution Status
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
                            <h6>Grievance Management</h6>
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
                            <h6>Notifications</h6>
                            <NavLink to="/inbox/" className="nav-link">
                                <Icon.Inbox 
                                    className="icon"
                                /> 
                                <span className="title">Inbox</span>
                            </NavLink>



                            
                            

                            <NavDropdown title= {
                                <div className="dropdown-title">
                                    <Icon.User 
                                        className="icon"
                                    /> 
                                    <span className="title">
                                        User 
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        /> 
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                                <NavLink 
                                    to="/signup/" 
                                    className="dropdown-item" 
                                    target="_blank">
                                    <Icon.UserPlus 
                                        className="icon" 
                                    /> 
                                    Sign Up
                                </NavLink>
                                <NavLink 
                                    to="/login/" 
                                    className="dropdown-item" 
                                    target="_blank"> 
                                    <Icon.UserCheck 
                                        className="icon" 
                                    /> 
                                    Login
                                </NavLink>
                                <NavLink 
                                    to="/forgot-password/" 
                                    className="dropdown-item" 
                                    target="_blank">
                                    <Icon.Unlock 
                                        className="icon" 
                                    /> 
                                    Forgot Password
                                </NavLink>
                            </NavDropdown>
                            
                            <NavDropdown title= {
                                <div className="dropdown-title">
                                    <Icon.BarChart2 
                                        className="icon"
                                    /> 
                                    <span className="title">
                                        Apex Charts 
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        /> 
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                                <NavLink 
                                    to="/line-charts/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Line Charts
                                </NavLink>
                                <NavLink 
                                    to="/area-charts/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Area Charts
                                </NavLink>
                                <NavLink 
                                    to="/column-charts/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Column Charts
                                </NavLink>
                                <NavLink 
                                    to="/bar-charts/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Bar Charts
                                </NavLink>
                                <NavLink 
                                    to="/mixed-charts/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Mixed Charts
                                </NavLink>
                                <NavLink 
                                    to="/pie-donuts-charts/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Pie and Donuts Charts
                                </NavLink>
                            </NavDropdown>

                            
                            
                            

                            <NavDropdown title= {
                                <div className="dropdown-title">
                                    <Icon.FileText 
                                        className="icon"
                                    /> 
                                    <span className="title">
                                        Pages 
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        /> 
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                                <NavLink 
                                    to="/users-card/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Users Card
                                </NavLink>

                                <NavLink 
                                    to="/notifications/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    <span className="title">Notifications</span>
                                </NavLink>

                                <NavLink 
                                    to="/time-line/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Time line
                                </NavLink>

                                <NavLink 
                                    to="/invoice-template/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Invoice Template
                                </NavLink>

                                <NavLink 
                                    to="/gallery/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Gallery
                                </NavLink>

                                <NavLink 
                                    to="/faq/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Faq
                                </NavLink>
                                <NavLink 
                                    to="/pricing/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Pricing
                                </NavLink>

                                <NavLink 
                                    to="/error-404/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Error 404 
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