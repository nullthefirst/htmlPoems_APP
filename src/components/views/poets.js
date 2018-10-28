import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'mdbreact';
import { Card } from 'mdbreact';

import '../Artis.css';

export default class Poets extends Component {
  render() {
    return(
      <div>
        <div class="container">
          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-12 col-sm-4">
              <Card>
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
              </Card>
            </div>
            <div class="col-sm-4"></div>
          </div>
        </div>
      </div>
    );
  }
}