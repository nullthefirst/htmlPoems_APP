import React, { Component } from 'react';
import { Card, CardBody, CardImage, CardTitle } from 'mdbreact';

import '../Artis.css';

export default class Music extends Component {
  render() {
    return(
      <div>
        <div class="container">
          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-12 col-sm-4">
              <Card>
                <iframe title="STAT1C B1NARY" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/498935088&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              </Card>
            </div>
            <div class="col-sm-4"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-4">
              <Card>
                <iframe title="NackUs" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480556836&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              </Card>
            </div>
            <div class="col-sm-4"></div>
            <div class="col-sm-4"></div>
          </div>
        </div>
      </div>
    );
  }
}