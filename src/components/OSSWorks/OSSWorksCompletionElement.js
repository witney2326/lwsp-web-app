import React from 'react';
import {Row, Col, Table, Button} from 'react-bootstrap';

class OSSWorksCompletionElement extends React.Component {
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
                                    
                                        <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>Household Works Completion</b></h8></h8>
                                    </div>
                                    
                                    <Table responsive hover className="m-0">
                                        <thead>
                                            <th>#</th>
                                            <th>City</th>
                                            <th>Area</th>
                                            <th>Block</th>
                                            <th>HH Ref No.</th>
                                            <th>HH Name</th>
                                            <th>Selected Technology</th>
                                            <th>Works Inspected</th>
                                            <th>Completion Verified</th>                                                                                   
                                            <th>Works Inspection</th> 
                                            <th>Completion Certificate</th> 
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Lilongwe</td>
                                                <td> 43</td>
                                                <td>Vic</td>
                                                <td>Ref##</td>
                                                <td>Witney Kabango</td>                                               
                                                <td>SVIP</td>
                                                <td> 
                                                    <input type="checkbox">
                                                    </input>
                                                </td>
                                                <td> 
                                                    <input type="checkbox">
                                                    </input>
                                                </td>
                                                <td>
                                                <Button variant="secondary">
                                                    Inspection
                                                    </Button>
                                                </td>
                                                <td>
                                                <Button variant="secondary">
                                                    Certificate
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>Lilongwe</td>
                                                <td> 43</td>
                                                <td>Vic</td>
                                                <td>Ref##</td>
                                                <td>Witney Kabango</td>
                                                <td>TVIP</td>
                                                <td> 
                                                    <input type="checkbox">
                                                    </input>
                                                </td>
                                                <td> 
                                                    <input type="checkbox">
                                                    </input>
                                                </td>
                                                <td>
                                                <Button variant="secondary">
                                                    Inspection
                                                    </Button>
                                                </td>
                                                <td>
                                                <Button variant="secondary">
                                                    Certificate
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

export default OSSWorksCompletionElement;