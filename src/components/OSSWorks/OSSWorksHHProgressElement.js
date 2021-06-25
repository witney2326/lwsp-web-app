import React from 'react';
import {Row, Col, Table, Button} from 'react-bootstrap';

class OSSWorksHHProgressElement extends React.Component {
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
                                    
                                        <h8 className="card-title"><h8 style={{ color: 'blue' }}><b>Household Works Progress</b></h8></h8>
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
                                            <th>Project Start Date</th>
                                            <th>Progress(%)</th>
                                            <th>Progress Record Date</th>
                                            <th>Action</th>  
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
                                                <td>12-12-12</td>
                                                <td>43</td>
                                                <td>12-12-12</td>
                                                <td>
                                                <Button variant="secondary">
                                                    More..
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
                                                <td>12-12-12</td>
                                                <td>43</td>
                                                <td>12-12-12</td>
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

export default OSSWorksHHProgressElement;