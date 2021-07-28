import React from 'react';
import { Row, Col, Breadcrumb, Form, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const CMaddcase = () => {
    return (

        <Row>
            <Col xl={12}>
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="card-header">
                            <h5 className="card-title"></h5>
                        </div>

                        <Form>
                            <Form.Row>
                                
                                
                                <Form.Group as={Col} controlId="plot">
                                    <Form.Label>Household Code. </Form.Label>
                                    <Form.Control type="text" placeholder="HH Code" />
                                </Form.Group> 
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="ccategory">
                                    <Form.Label>Case Category</Form.Label>
                                    <Form.Control as="select">
                                        <option>Select Category...</option>
                                        <option> Beneficiary Registration</option>
                                        <option> OSS Costs</option>
                                        <option> Contractor</option>
                                        <option> Work Progress</option>
                                        <option> Supervision</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="addressee">
                                    <Form.Label>Complaint Recepient</Form.Label>
                                    <Form.Control as="select">
                                        <option>Select Recepient...</option>
                                        <option> Area Contractor</option>
                                        <option> Lilongwe City Council</option>
                                        <option> Lilongwe Water Board</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="complaint">
                                    <Form.Label>Complaint</Form.Label>
                                    <Form.Control type="text" placeholder="type complaint here" >
                                        
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <ButtonToolbar >
                                <Button variant="outline-success" className="mt-2 mr-2">Register Case</Button>       
                            </ButtonToolbar>
                        </Form>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default CMaddcase
