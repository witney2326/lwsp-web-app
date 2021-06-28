import React from 'react';
import {Row, Col, Table, Button} from 'react-bootstrap';

class ContractorsElement extends React.Component {
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
                                    
                                        <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>Contractors</b></h8></h8>
                                    </div>
                                    
                                    <Table responsive hover className="m-0">
                                        <thead>
                                            <th>#</th>
                                            <th>Contractor Name</th>
                                            <th>Address</th>
                                            <th>Contact Number</th>
                                            <th>email</th>
                                            <th>Number Of Projects</th>
                                            <th>Action</th> 
                                            <th></th> 
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Witney</td>
                                                <td> PO Box 1</td>
                                                <td>999999999</td>
                                                <td>witney2326@me.com</td>
                                                <td>2</td>
                                                <td>
                                                <Button variant="secondary">
                                                    More..
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

export default ContractorsElement;