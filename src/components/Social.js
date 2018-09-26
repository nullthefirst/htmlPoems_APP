import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import './Artis.css';

export default class Social extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Col xsHidden md={4}></Col>
          <Col md={4}>
            <Well bsSize="small">
              <a href="https://instagram.com/poetrique" title="Instagram @poetrique"><h4><i class="fab fa-instagram"></i> Follow us on Instagram @poetrique</h4></a>
            </Well>
          </Col>
          <Col xsHidden md={4}></Col>
        </Grid>
      </div>
    );
  }
}