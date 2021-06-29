import React from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap';
import BrowseProductPicElement from './BrowseProductPicElement';

class AddProductElement extends React.Component {
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
                                    
                                        <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>Add Product/Service</b></h8></h8>
                                    </div>
                                    
                                    <Form>
                                        
                                        <Form.Row>                       
                                            <Form.Group as={Col} controlId="product-name">
                                                <Form.Label> Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Product name" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="product-desc">
                                                <Form.Label> Description</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Product Description" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="product-desc">
                                                < BrowseProductPicElement />
                                            </Form.Group>                                    
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="cost">
                                                <Form.Label> Cost</Form.Label>
                                                <Form.Control placeholder="Product Cost" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="hh-contribution">
                                                <Form.Label>Household contribution</Form.Label>
                                                <Form.Control placeholder="household contribution" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="period">
                                                <Form.Label>Implimentation Period</Form.Label>
                                                <Form.Control placeholder="expected period"/>
                                            </Form.Group>
                                        </Form.Row>
                                  
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Basic Table */}
                </div>     
                
            
        );
    }
}

export default AddProductElement;