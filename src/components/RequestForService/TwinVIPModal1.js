import React from 'react';
import {Modal, Button, ButtonToolbar, Image } from 'react-bootstrap';
import SIV from '../../assets/img/TwinVIP1.jpg'


class DefaultModal extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        OSS Products
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h5>Twin VIP Toilet 1</h5>
                    <p>
                        
                        <Image src={SIV} />
                    </p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
  
class TwinVIPModal1 extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { modalShow: false };
    }
  
    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <ButtonToolbar>
                <Button
                    variant="secondary"
                    onClick={() => this.setState({ modalShow: true })}
                >
                    Show sample...
                </Button>

                <DefaultModal
                    show={this.state.modalShow}
                    onHide={modalClose}
                />
            </ButtonToolbar>
        );
    }
}

export default TwinVIPModal1;