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
          <Col md={4}>
            <Well>
              <Image src="#" alt="htmlPoems" title="htmlPoems Content" responsive />
              
            </Well>          
          </Col>
          <Col xsHidden md={4}></Col>
          <Col md={4}>
            <Well>
              <Image src="http://res.cloudinary.com/poetrique/image/upload/v1536065967/htmlpoems/wonexo/wonexo_4.png" alt="htmlPoems" title="htmlPoems Content" responsive />
              &copy; Wonexo
            </Well>
          </Col>
        </Grid>
        <Grid>
          <Col md={4}>
            <Well>
              <Image src="http://res.cloudinary.com/poetrique/image/upload/v1536065174/htmlpoems/paul_joe/pj_3.jpg" alt="htmlPoems" title="htmlPoems Content" responsive />
              &copy; PeeJay
            </Well>
          </Col>
          <Col md={4}>
            <Well>
              <Image src="https://res.cloudinary.com/poetrique/image/upload/v1537473495/htmlpoems/mambo/z01.jpg" alt="htmlPoems" title="htmlPoems Content" responsive />
              &copy; Mambo
            </Well>
          </Col>
          <Col xsHidden md={4}></Col>
        </Grid>
        <Grid>
          <Col xsHidden md={4}></Col>
          <Col md={4}>
            <Well>
              <Image src="http://res.cloudinary.com/poetrique/image/upload/v1536065963/htmlpoems/wonexo/wonexo_5.png" alt="htmlPoems" title="htmlPoems Content" responsive />
              &copy; Wonexo
            </Well>
          </Col>
          <Col md={4}>
            <Well>
              <Image src="#" alt="htmlPoems" title="htmlPoems Content" responsive />

            </Well>
          </Col>
        </Grid>
        <Grid>
          <Col md={4}>
            <Well>
              <Image src="#" alt="htmlPoems" title="htmlPoems Content" responsive />
              
            </Well>
          </Col>
          <Col md={4}></Col>
          <Col md={4}>
            <Well>
              <Image src="#" alt="htmlPoems" title="htmlPoems Content" responsive />
              
            </Well>
          </Col>
        </Grid>
      </div>
    );
  }
}