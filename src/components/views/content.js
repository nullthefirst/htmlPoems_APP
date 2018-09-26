import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Well } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import '../Artis.css';

export default class Content extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Col xsHidden md={4}></Col>
          <Col xsHidden md={4}></Col>
          <Col md={4}>
            <Well><Image src="#" alt="htmlPoems" title="htmlPoems Content" responsive /></Well>
          </Col>
        </Grid>
        <Grid>
          <Col md={4}>
            <Well><Image src="#" alt="htmlPoems" title="htmlPoems Content" responsive /></Well>
          </Col>
          <Col md={4}>
            <Well><Image src="#" alt="htmlPoems" title="htmlPoems Content" responsive /></Well>
          </Col>
          <Col xsHidden md={4}></Col>
        </Grid>
        <Grid>
          <Col xsHidden md={4}></Col>
          <Col md={4}>
            <Well><Image src="#" alt="htmlPoems" title="htmlPoems Content" responsive /></Well>
          </Col>
          <Col md={4}>
            <Well><Image src="#" alt="htmlPoems" title="htmlPoems Content" responsive /></Well>
          </Col>
        </Grid>
        <Grid>
          <Col md={4}>
            <Well><Image src="#" alt="htmlPoems" title="htmlPoems Content" responsive /></Well>
          </Col>
          <Col md={4}></Col>
          <Col md={4}>
            <Well><Image src="#" alt="htmlPoems" title="htmlPoems Content" responsive /></Well>
          </Col>
        </Grid>
      </div>
    );
  }
}