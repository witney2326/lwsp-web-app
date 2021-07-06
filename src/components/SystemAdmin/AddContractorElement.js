import React from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap';




class AddContractorElement extends React.Component {
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
                                    
                                        <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>Add Contractor</b></h8></h8>
                                    </div>
                                    
                                    <Form>
                                        
                                        <Form.Row>                       
                                            <Form.Group as={Col} controlId="contractor-name">
                                                <Form.Label>Contractor Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter contractor name" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="allocated-area">
                                                <Form.Label>Allocated Area</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Select...</option>
                                                    <option>...</option>
                                                </Form.Control>
                                            </Form.Group>

                                            
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="Address">
                                                <Form.Label>Postal Address</Form.Label>
                                                <Form.Control placeholder="Postal Address" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="email-address">
                                                <Form.Label>email address</Form.Label>
                                                <Form.Control placeholder="email address" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="phone">
                                                <Form.Label>Contact Number</Form.Label>
                                                <Form.Control placeholder="phone number"/>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="username">
                                                <Form.Label>Username</Form.Label>
                                                <Form.Control />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="Password">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
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

export default AddContractorElement;