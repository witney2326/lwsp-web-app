import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import {Row, Col, Form} from 'react-bootstrap';
 
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class WorksProgressDateElement extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate)
  }
 
  render() {
    return (
    <div className="page-wrapper">
        <div className="card mb-4">
           <div className="card-body">
               <div className="card-header">
                   <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>Works Progress and Record Date</b></h8></h8>
               </div>
               <Form.Row>
                    <Col xl={3}>
                        <Form.Group as={Col} controlId="Ward">
                            <Form.Label>Works Progress</Form.Label>
                            <Form.Control form-control-sm as="select">
                                <option>Select Progress Rate...</option>
                                <option>20</option>
                                <option>40</option>
                                <option>50</option>
                                <option>75</option>
                                <option>90</option>
                                <option>100</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xl={3}>
                        Date Of Record

                        <form onSubmit={ this.onFormSubmit }>
                            <div className="form-group">
                                <DatePicker
                                    selected={ this.state.startDate }
                                    onChange={ this.handleChange }
                                    name="startDate"
                                    dateFormat="MM/dd/yyyy"
                            />
                                </div>
                                    
                                <div>
                            </div>
                        </form>
                        
                    </Col>
                    <Col xl={3}>
                        <button className="btn btn-primary">Submit Project Progress</button>
                    </Col>
                </Form.Row>
            </div>
        </div>
    </div>
    );
  }
  
}

export default WorksProgressDateElement;