import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
 
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class WorksStartDateElement extends Component {

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
                   <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>Works Start Date</b></h8></h8>
               </div>
                <form onSubmit={ this.onFormSubmit }>
                    <div className="form-group">
                    <DatePicker
                        selected={ this.state.startDate }
                        onChange={ this.handleChange }
                        name="startDate"
                        dateFormat="MM/dd/yyyy"
                    />
                    </div>
                        <button className="btn btn-primary">Submit Project Start Date For Household</button>
                    <div>

                    </div>
                </form>
            </div>
        </div>
    </div>
    );
  }
  
}

export default WorksStartDateElement;