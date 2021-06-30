import React from 'react';
import { Row, Col, Breadcrumb, Tabs, Tab, Nav } from 'react-bootstrap';
import { Form, Button, ButtonToolbar, InputGroup, FormControl, DropdownButton, Dropdown, Table, ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import * as Icon from 'react-feather';
import Footer from '../Footer/Footer';

import BTSearchElement from '../../components/BeneficiaryTargeting/BTSearchElement';
import BTBeneficiariesElement from '../../components/BeneficiaryTargeting/BTBeneficiariesElement';
import BTAddElement from '../../components/BeneficiaryTargeting/BTAddElement';
import BTAddedBeneficiariesElement from '../../components/BeneficiaryTargeting/BTAddedBeneficiariesElement';


class BeneficiaryAdd extends React.Component {
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
                            <h1>Add Beneficiary</h1>
                            <Link to="/" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Add Beneficiary</Breadcrumb.Item>
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
                                        <Col lg={12}>
                                            {/* File path: */}
                                            <BTAddElement />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            {/* File path: */}
                                            <BTAddedBeneficiariesElement />
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

export default BeneficiaryAdd;