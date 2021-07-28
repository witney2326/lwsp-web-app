import React from 'react';
import { Row, Col, Breadcrumb } from 'react-bootstrap';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer';
import CMresolvedcases from '../../components/CaseMgt/CMresolvedcases';


class ResolvedCases extends React.Component {
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
                            <h1>Resolved Cases</h1>
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
                                            <CMresolvedcases />
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

export default ResolvedCases;