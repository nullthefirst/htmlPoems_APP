import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import '../Artis.css';

export default class Disclaimer extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Col xsHidden md={4}></Col>
          <Col md={4}>
            <Well>
              <p>The literary, and musical content of <b>htmlpoems.com</b> belongs to each respective individual writer and musician. However, the representation of the web app as a result of its code construction is the intellectual property of <b>Usheninte Dangana</b>, as a technological agent of Poetrique<b>&#8482;</b>.</p>
            </Well>
          </Col>
          <Col xsHidden md={4}></Col>
        </Grid>
      </div>
    );
  }
}