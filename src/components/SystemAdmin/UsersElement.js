import React from 'react';
import {Row, Col, Table, Button} from 'react-bootstrap';

class UsersElement extends React.Component {
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
                                    
                                        <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>Users</b></h8></h8>
                                    </div>
                                    
                                    <Table responsive hover className="m-0">
                                        <thead>
                                            <th>#</th>
                                            <th>Username</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>User Category</th>                              
                                            <th>Action</th> 
                                            
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>wkabango</td>
                                                <td>Witney</td>
                                                <td>Kabango</td>
                                                <td>Administrator</td>                                   
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

export default UsersElement;