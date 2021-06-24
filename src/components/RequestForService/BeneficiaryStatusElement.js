import React from 'react';
import {Row, Col, Table} from 'react-bootstrap';

class BeneficiaryStatusElement extends React.Component {
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
                                    
                                        <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>Beneficiary Choice Making Status</b></h8></h8>
                                    </div>
                                    
                                    <Table responsive hover className="m-0">
                                        <thead>
                                            <th>#</th>
                                            <th>City</th>
                                            <th>Area</th>
                                            <th>Block</th>
                                            <th>HH Ref No.</th>
                                            <th>HH Name</th>
                                            <th>Contact No.</th>
                                            <th>Choice Making Status</th>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Lilongwe</td>
                                                <td> 43</td>
                                                <td>Vic</td>
                                                <td>Ref##</td>
                                                <td>Witney Kabango</td>
                                                <td>########</td>
                                                <td>Ready</td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>Lilongwe</td>
                                                <td> 43</td>
                                                <td>Vic</td>
                                                <td>Ref##</td>
                                                <td>Witney Kabango</td>
                                                <td>########</td>
                                                <td>Not Ready</td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>Lilongwe</td>
                                                <td> 43</td>
                                                <td>Vic</td>
                                                <td>Ref##</td>
                                                <td>Witney Kabango</td>
                                                <td>########</td>
                                                <td>Request TG</td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>Lilongwe</td>
                                                <td> 43</td>
                                                <td>Vic</td>
                                                <td>Ref##</td>
                                                <td>Witney Kabango</td>
                                                <td>########</td>
                                                <td>Waiting for TG</td>
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

export default BeneficiaryStatusElement;