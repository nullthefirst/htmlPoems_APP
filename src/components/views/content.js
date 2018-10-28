import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

import '../Artis.css';

const noticeStyle = {
  textAlign: "center"
}

export default class Content extends Component {
  render() {
    return(
      <div>
        <div class="container">
          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
              <h4 style={noticeStyle}>this layout was coded on purpose</h4>
            </div>
            <div class="col-sm-4"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <Card>
                <CardImage className="img-fluid" src="https://res.cloudinary.com/poetrique/image/upload/v1537473496/htmlpoems/mambo/z02.jpg" alt="htmlPoems" title="htmlPoems Content" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                </CardBody>
              </Card>
            </div>
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
              <Card>
                <CardImage className="img-fluid" src="http://res.cloudinary.com/poetrique/image/upload/v1536065967/htmlpoems/wonexo/wonexo_4.png" alt="htmlPoems" title="htmlPoems Content" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
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
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <Card>
                <CardImage className="img-fluid" src="" alt="htmlPoems" title="htmlPoems Content" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                </CardBody>
              </Card>
            </div>
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
              <Card>
                <CardImage className="img-fluid" src="" alt="htmlPoems" title="htmlPoems Content" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
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
              <Image src="http://res.cloudinary.com/poetrique/image/upload/v1536065174/htmlpoems/paul_joe/pj_4.jpg" alt="htmlPoems" title="htmlPoems Content" responsive />
              &copy; PeeJay
            </Well>
          </Col>
        </Grid>
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <Card>
                <CardImage className="img-fluid" src="" alt="htmlPoems" title="htmlPoems Content" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                </CardBody>
              </Card>
            </div>
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
              <Card>
                <CardImage className="img-fluid" src="" alt="htmlPoems" title="htmlPoems Content" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
        <Grid>
          <Col md={4}>
            <Well>
              <Image src="https://res.cloudinary.com/poetrique/image/upload/v1537473496/htmlpoems/mambo/z02.jpg" alt="htmlPoems" title="htmlPoems Content" responsive />
              &copy; Mambo
            </Well>
          </Col>
          <Col md={4}></Col>
          <Col md={4}>
            <Well>
              <Image src="https://res.cloudinary.com/poetrique/image/upload/v1537473496/htmlpoems/mambo/z04.jpg" alt="htmlPoems" title="htmlPoems Content" responsive />
              &copy; Mambo
            </Well>
          </Col>
        </Grid>
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <Card>
                <CardImage className="img-fluid" src="" alt="htmlPoems" title="htmlPoems Content" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                </CardBody>
              </Card>
            </div>
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
              <Card>
                <CardImage className="img-fluid" src="" alt="htmlPoems" title="htmlPoems Content" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}