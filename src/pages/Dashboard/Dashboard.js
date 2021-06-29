import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import {Row, Breadcrumb, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Loader from '../../components/Common/Loader';
import MonthlyTotalHouseholdsContributions from '../../components/Dashboard/Sales/MonthlyTotalHouseholdsContributions';
import TotalProductRequest from '../../components/Dashboard/Sales/TotalProductRequest';
import VerifiedRequests from '../../components/Dashboard/Sales/VerifiedRequests';
import PendingRequests from '../../components/Dashboard/Sales/PendingRequests';
import ProductSalesByArea from '../../components/Dashboard/ProductSalesByArea';
import TrendingOSSProduct from '../../components/Dashboard/TrendingOSSProduct';

class Dashboard extends React.Component {
    state = {
        sideMenu: true,
        loading: true
    };

    // Loading icon false after DOM loaded
    componentDidMount() {
        this.myInterval = setInterval(() => { 
            this.setState({ loading: false });
        }, 1000); 
    }

    componentWillUnmount(){
        clearInterval(this.myInterval);
    }

    // Toggle side bar menu
    _onSideMenu = (active) => {
        this.setState({sideMenu: active});
    }
    
    render() {
        let loader = null;
        if (this.state.loading) {
            loader = <Loader message="Loading..." />
        }
        
        return (
            <div className="page-wrapper">
                {/* Navigation */}
                <Navigation onClick={this._onSideMenu} />
                {/* End Navigation */}
                
                <div className={`main-content d-flex flex-column ${this.state.sideMenu ? '' : 'hide-sidemenu'}`}>
                    {/* Loader */}
                    {loader}
                    {/* End Loader */}

                    {/* Breadcrumb */}
                    <div className="main-content-header">
                        <Breadcrumb>
                            <h1>LWSP Dashboard</h1>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    <Row>
                        <Col sm={6} lg={3}>
                            {/* File path: src/components/Dashboard/Sales/MonthlySales.js */}
                            <MonthlyTotalHouseholdsContributions />
                        </Col>

                        <Col sm={6} lg={3}>
                            {/* File path: src/components/Dashboard/Sales/TotalOrders.js */}
                            <TotalProductRequest />
                        </Col>
 
                        <Col sm={6} lg={3}>
                            {/* File path: src/components/Dashboard/Sales/CompletedOrders.js */}
                            <VerifiedRequests />
                        </Col>

                        <Col sm={6} lg={3}>
                            {/* File path: src/components/Dashboard/Sales/PendingOrders.js */}
                            <PendingRequests />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={5}>
                            {/* File path: src/components/Dashboard/SalesByCountries.js */}
                            <ProductSalesByArea />
                        </Col>

                        <Col lg={7}>
                            {/* File path: src/components/Dashboard/TrendingProduct.js */}
                            <TrendingOSSProduct />
                        </Col>
                        
                        
                    </Row>

 

                    {/* Footer */}
                    <div className="flex-grow-1"></div>
                    <Footer /> 
                    {/* End Footer */}
                </div>
            </div>
        );
    }
}

export default Dashboard;