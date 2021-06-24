import React from 'react';
import {Row, Col, Table, Button} from 'react-bootstrap';

class TechnologyContributionElement extends React.Component {
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
                                    
                                        <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>Household Contribution</b></h8></h8>
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
                                            <th>Selected Technology</th>
                                            <th>HH Contribution</th>
                                            <th>Payment Made?</th>
                                            <th>Payment Verified?</th>
                                            <th></th> 
                                            <th></th> 
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
                                                <td>SVIP</td>
                                                <td>######</td>
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
                                                    Payment
                                                    </Button>
                                                </td>
                                                <td>
                                                    <Button variant="secondary">
                                                    Verify
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
                                                <td>########</td>
                                                <td>TVIP</td>
                                                <td>######</td>
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
                                                    Payment
                                                    </Button>
                                                </td>
                                                <td>
                                                    <Button variant="secondary">
                                                    Verify
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
                                                <td>########</td>
                                                <td>Septic Tank</td>
                                                <td>######</td>
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
                                                    Payment
                                                    </Button>
                                                </td>
                                                <td>
                                                    <Button variant="secondary">
                                                    Verify
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
                                                <td>########</td>
                                                <td>Pour Flush</td>
                                                <td>######</td>
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
                                                    Payment
                                                    </Button>
                                                </td>
                                                <td>
                                                    <Button variant="secondary">
                                                    Verify
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

export default TechnologyContributionElement;