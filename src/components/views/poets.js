import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import Social from '../Social';
import '../Artis.css';

export default class Poets extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Col xsHidden md={4}></Col>
          <Col md={4}>
            <Well>
            </Well>
          </Col>
          <Col xsHidden md={4}></Col>
        </Grid>
        <Social />
      </div>
    );
  }
}