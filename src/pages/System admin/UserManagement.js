import React from 'react';
import { Row, Col, ButtonToolbar, Button, Breadcrumb } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer';
import ProductsElement from '../../components/SystemAdmin/ProductsElement';
import UsersElement from '../../components/SystemAdmin/UsersElement';



class UserManagement extends React.Component {
    state = {
        sideMenu: true
    };

    _onSideMenu = (active) => {
        this.setState({ sideMenu: active });
    }

    render() {
        return (
            <div className="page-wrapper">
                {/* Navigation */}
                <Navigation onClick={this._onSideMenu} />
                {/* End Navigation */}

                <div className={`main-content d-flex flex-column ${this.state.sideMenu ? '' : 'hide-sidemenu'}`}>
                    {/* Breadcrumb */}
                    <div className="main-content-header">
                        <Breadcrumb>
                            <h1>Users</h1>
                            <Link to="/" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Users </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}
                    
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title"></h5>
                                    </div>
                                    <Row>
                                    <ButtonToolbar>  
                                        <Link to="/register-user"><Button variant="outlined" color="primary">Register User</Button></Link>
                                        <Link to="/forgot-password"><Button variant="outlined" color="primary">Forgot Password</Button></Link>
                                        <Link to="/register"><Button variant="outlined" color="primary">Roles and Permissions</Button></Link>
                                    </ButtonToolbar>
                                    </Row>
                                </div>
                                <div>
                                    <Row>
                                        <Col lg={12}>
                                            {/* File path: */}
                                            <UsersElement />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Footer  */}
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}
                </div>
            </div>
        );
    }
}

export default UserManagement;