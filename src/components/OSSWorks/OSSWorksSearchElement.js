import React from 'react';
import {Row, Col, Form} from 'react-bootstrap';

const OSSWorksSearchElement = () => {
    return (
    
<Row>
   <Col xl={12}>
       <div className="card mb-4">
           <div className="card-body">
               <div className="card-header">
                   <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>HH Search Parameters</b></h8></h8>
               </div>

               <Form>
                   <Form.Row>
                        <Form.Group as={Col} controlId="Ward">
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
                       <Form.Group as={Col} controlId="HHRef">
                           <Form.Label>Service Category</Form.Label>
                           <Form.Control as="select">
                               <option>New </option>
                               <option>Rehabilitation</option>
                           </Form.Control>
                       </Form.Group> 
                       <Form.Group as={Col} controlId="tech-choice">
                           <Form.Label>Technology Choice</Form.Label>
                           <Form.Control as="select">
                               <option>Single VIP Toilet </option>
                               <option>Twin VIP Toilet</option>
                               <option>Por FLASH Toilet</option>
                               <option>Septic Tank</option>
                           </Form.Control>   
                       </Form.Group>
                       <Form.Group as={Col} controlId="PlotNo">
                           <Form.Label>Plot No.</Form.Label>
                           <Form.Control as="select">
                               <option>Select PlotNo...</option>
                               <option>...</option>
                           </Form.Control>
                       </Form.Group>
                       <Form.Group as={Col} controlId="HHRef">
                           <Form.Label>HH Ref. No.</Form.Label>
                           <Form.Control as="select">
                               <option>HH Ref No...</option>
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

export default OSSWorksSearchElement
