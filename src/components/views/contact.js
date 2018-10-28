import React, { Component } from 'react';
import { Card } from 'mdbreact';

import '../Artis.css';

export default class Contact extends Component {
  render() {
    return(
      <div>
        <div class="container">
          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-12 col-sm-4">
              <Card>
                <p><b>htmlPoems.com</b> is a open and inclusive online creative space. If you have created something beautiful, and would like to share it with the world, simply send us a <b>DM</b> on Instagram. We will place your art in our queue, and publish it to the world, in a wonderful and creative way.</p>
              </Card>
            </div>
            <div class="col-sm-4"></div>
          </div>
        </div>
      </div>
    );
  }
}