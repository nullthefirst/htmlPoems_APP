import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import '../Artis.css';

export default class Music extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Col xsHidden md={4}></Col>
          <Col md={4}>
            <Well>
              <iframe title="STAT1C B1NARY" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/498935088&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </Well>
          </Col>
          <Col xsHidden md={4}></Col>          
        </Grid>
        <Grid>
          <Col xsHidden md={4}></Col>
          <Col xsHidden md={4}></Col>
          <Col md={4}>
            <Well>
              <iframe title="NackUs" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480556836&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </Well>
          </Col>          
        </Grid>
      </div>
    );
  }
}