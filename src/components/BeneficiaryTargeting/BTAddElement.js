import React from 'react';
import { Row, Col, Breadcrumb, Form, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const BTAddElement = () => {
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
                                <Form.Group as={Col} controlId="ward">
                                    <Form.Label>Ward</Form.Label>
                                    <Form.Control as="select">
                                        <option>Select Ward...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="ward-code">
                                    <Form.Label>Ward-Code </Form.Label>
                                    <Form.Control type="text" placeholder="ward-code" disabled />  
                                </Form.Group>
                                <Form.Group as={Col} controlId="area">
                                    <Form.Label>City Area</Form.Label>
                                    <Form.Control as="select">
                                        <option>Select Area...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="area-code">
                                    <Form.Label>Area-Code </Form.Label>
                                    <Form.Control type="text" placeholder="area-code" disabled />  
                                </Form.Group>
                                <Form.Group as={Col} controlId="block">
                                    <Form.Label>Block name </Form.Label>
                                    <Form.Control type="text" placeholder="block name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="plot">
                                    <Form.Label>HH Plot No. </Form.Label>
                                    <Form.Control type="text" placeholder="plot number" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="contact-number">
                                    <Form.Label>HH Phone No. </Form.Label>
                                    <Form.Control type="text" placeholder="phone number" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="hhname">
                                    <Form.Label>HH Name </Form.Label>
                                    <Form.Control type="text" placeholder="Household name" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="age-category">
                                    <Form.Label>HH Head Age Category</Form.Label>
                                    <Form.Control as="select">
                                        <option>...</option>
                                        <option>Eldery (70 years above)</option>
                                        <option>Child Headed</option>
                                        <option>None</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="economic livelihood">
                                    <Form.Label>Source of Livelihood</Form.Label>
                                    <Form.Control as="select">
                                        <option>...</option>
                                        <option>Begging</option>
                                        <option>Ganyu</option>
                                        <option>Petty Trading</option>
                                        <option>Formal Employment</option>
                                        <option>Informal Employment</option>
                                        <option>Remittances</option>
                                        <option>Pension</option>
                                        <option>Subsistence Farming</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="Monthly-Income">
                                    <Form.Label>Average Monthly Income</Form.Label>
                                    <Form.Control as="select">
                                        <option>...</option>
                                        <option>At most MK10,000.00</option>
                                        <option>At most MK30,000.00</option>
                                        <option>At most MK50,000.00</option>
                                        <option>At most MK100,000.00</option>
                                        <option>Above MK100,000.00</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="vulnerability">
                                    <Form.Label>HH Vulnerable?</Form.Label>
                                    <Form.Control as="select">
                                        <option>...</option>
                                        <option>YES</option>
                                        <option>NO</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="poor">
                                    <Form.Label>HH Poor?</Form.Label>
                                    <Form.Control as="select">
                                        <option>...</option>
                                        <option>YES</option>
                                        <option>NO</option>
                                    </Form.Control>
                                </Form.Group>
                                

                            </Form.Row>

                            <Form.Row>
                            <Form.Group as={Col} controlId="Household-Ownership-Status">
                                    <Form.Label>HH Ownership Status</Form.Label>
                                    <Form.Control as="select">
                                        <option>...</option>
                                        <option>Owned</option>
                                        <option>Being Purchased</option>
                                        <option>Employer Provided</option>
                                        <option>Free and Authorised</option>
                                        <option>Free Not Authorised</option>
                                        <option>Rented</option>
                                    </Form.Control>
                                </Form.Group>
                            <Form.Group as={Col} controlId="Structure-Location-Zone">
                                    <Form.Label>HH Structure Location Zone</Form.Label>
                                    <Form.Control as="select">
                                        <option>...</option>
                                        <option>On Land Zoned as residential area</option>
                                        <option>Within a flood-prone area</option>
                                        <option>Within River Buffer</option>
                                        <option>On Marginal Land</option>
                                        <option>On Reserved Land/Environmental sensitive</option>
                                        
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="Household-Latrine">
                                    <Form.Label>HH Latrine</Form.Label>
                                    <Form.Control as="select">
                                        <option>...</option>
                                        <option>No Latrine</option>
                                        <option>Flush Toilet</option>
                                        <option>VIP Latrine</option>
                                        <option>Latrine with Roof</option>
                                        <option>Latrine Without Roof</option>
                                        <option>Shared Latrine with neighbors</option>
                                    </Form.Control>
                                </Form.Group>

                                

                                <Form.Group as={Col} controlId="fully-contribute">
                                    <Form.Label>HH Identification?</Form.Label>
                                    <Form.Control as="select">
                                        <option>...</option>
                                        <option>CBT</option>
                                        <option>Self</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="HH-code">
                                    <Form.Label>HH-Code </Form.Label>
                                    <Form.Control type="text" placeholder="HH-code" disabled />  
                                </Form.Group>
                            </Form.Row>
                            <ButtonToolbar >
                                <Button variant="outline-primary" className="mt-2 mr-2"> Compute HH Code</Button>
                                <Button variant="outline-success" className="mt-2 mr-2">Register Beneficiary</Button>       
                            </ButtonToolbar>
                        </Form>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default BTAddElement
