import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import {
  Button, DropdownButton, MenuItem, ButtonToolbar,
  Modal, OverlayTrigger, Tooltip, Popover
} from 'react-bootstrap';

export default class Hello extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,

  }

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  getInitialValues = () => {
    const { location } = this.props;
    return location.state && location.state.oauth;
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }


  renderDropdownButton(title, i) {
    return (
      <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3" active>Active Item</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </DropdownButton>
    );
  }

  render() {
    const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link'];
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );
    console.log(this.state.showModal);
    return (
      <div className="container">
        <Helmet title="Mainan Bootstrap" />
        <h1>Mainan Bootstrap</h1>
        <ButtonToolbar>{BUTTONS.map(this.renderDropdownButton)}</ButtonToolbar>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
          >
          Launch demo modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="">popover</a>
            </OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="">tooltip</a>
            </OverlayTrigger> here</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
             Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
