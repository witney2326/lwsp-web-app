import React from 'react';
import {Row, Col, Breadcrumb, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";

const BTSearchElement = () => {
    return (
    
<Row>
   <Col xl={12}>
       <div className="card mb-4">
           <div className="card-body">
               <div className="card-header">
                   <h5 className="card-title">Beneficiary Search Parameters</h5>
               </div>

               <Form>
                   <Form.Row>
                        <Form.Group as={Col} controlId="area">
                           <Form.Label>Ward</Form.Label>
                           <Form.Control as="select">
                               <option>Select Ward...</option>
                               <option>...</option>
                           </Form.Control>
                       </Form.Group>
                        <Form.Group as={Col} controlId="area">
                           <Form.Label>City Area</Form.Label>
                           <Form.Control as="select">
                               <option>Select Area...</option>
                               <option>...</option>
                           </Form.Control>
                       </Form.Group>

                       <Form.Group as={Col} controlId="block">
                           <Form.Label>Block</Form.Label>
                           <Form.Control as="select">
                               <option>Select Block...</option>
                               <option>...</option>
                           </Form.Control>
                       </Form.Group>

                       <Form.Group as={Col} controlId="plot">
                           <Form.Label>Plot No.</Form.Label>
                           <Form.Control as="select">
                               <option>Select plot...</option>
                               <option>...</option>
                           </Form.Control>
                       </Form.Group>                      
                   </Form.Row>
               </Form>
           </div>
       </div>
   </Col>
</Row>
    )
}

export default BTSearchElement
