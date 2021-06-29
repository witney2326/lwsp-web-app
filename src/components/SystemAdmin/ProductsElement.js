import React from 'react';
import {Row, Col, Table, Button} from 'react-bootstrap';

class ProductsElement extends React.Component {
    state = {
        sideMenu: true
    };

    _onSideMenu = (active) => {
        this.setState({sideMenu: active});
    }

    render() {
        return (
            <div className="page-wrapper">
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                    
                                        <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>Products/Services</b></h8></h8>
                                    </div>
                                    
                                    <Table responsive hover className="m-0">
                                        <thead>
                                            <th>#</th>
                                            <th>Product Name</th>
                                            <th>Description</th>
                                            <th>Cost</th>
                                            <th>Contribution</th>                              
                                            <th>Action</th> 
                                            <th></th> 
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>SVIP</td>
                                                <td> Single VIP Latrine</td>
                                                <td>50,000.00</td>
                                                <td>20,000.00</td>                                   
                                                <td>
                                                <Button variant="secondary">
                                                    View/Edit
                                                    </Button>
                                                </td>
                                                
                                            </tr>
                                            
                                            
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Basic Table */}
                </div>     
                
            
        );
    }
}

export default ProductsElement;