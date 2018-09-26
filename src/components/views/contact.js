import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import '../Artis.css';

export default class Contact extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Col xsHidden md={4}></Col>
          <Col md={4}>
            <Well>
              <p><b>htmlPoems.com</b> is a open and inclusive online creative space. If you have created something beautiful, and would like to share it with the world, simply send us a <b>DM</b> on Instagram. We will place your art in our queue, and publish it to the world, in a wonderful and creative way.</p>
            </Well>
          </Col>
          <Col xsHidden md={4}></Col>
        </Grid>
      </div>
    );
  }
}