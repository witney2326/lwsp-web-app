import React from 'react';
import { Row, Col, Table, ButtonToolbar, Breadcrumb, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import * as Icon from 'react-feather';

const BTAddedBeneficiariesElement = () => {
    return (

        <Row>
            <Col xl={12}>
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="card-header">
                            <h5 className="card-title">Added Beneficiary List</h5>
                        </div>

                        <Table responsive hover className="m-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>City</th>
                                    <th>Area</th>
                                    <th>Block</th>
                                    <th>HH Ref No.</th>
                                    <th>HH Name</th>
                                    <th>Contact No.</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Lilongwe</td>
                                    <td>Area 36</td>
                                    <td>Victoria</td>
                                    <td>######</td>
                                    <td>Kabango</td>
                                    <td>0999987009</td>
                                    <td className="text-left">
                                        
                                        <ButtonToolbar >
                                            <Button variant="outline-primary" className="mt-2 mr-2"> View/Edit</Button>
                                            <Button variant="outline-success" className="mt-2 mr-2">Approve</Button>       
                                        </ButtonToolbar>
                                         
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default BTAddedBeneficiariesElement
