import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Well } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import '../Artis.css';

export default class Poets extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Col xsHidden md={4}></Col>
          <Col md={4}>
            <Well>
              <h3>Poets on the Platform</h3>
              <p><em>in no particular ranking of importance</em></p>
              <ListGroup>
                <ListGroupItem>* Ninté</ListGroupItem>
                <ListGroupItem>1. Mambo</ListGroupItem>
                <ListGroupItem>2. Ndindy</ListGroupItem>
                <ListGroupItem>3. Milzapoet</ListGroupItem>
                <ListGroupItem>4. TheOrvcle</ListGroupItem>
                <ListGroupItem>5. Zeezah_19</ListGroupItem>
                <ListGroupItem>6. Ray Okaah</ListGroupItem>
                <ListGroupItem>7. Wonexo</ListGroupItem>
                <ListGroupItem>8. PeeJay</ListGroupItem>
              </ListGroup>
            </Well>
          </Col>
          <Col xsHidden md={4}></Col>
        </Grid>
      </div>
    );
  }
}