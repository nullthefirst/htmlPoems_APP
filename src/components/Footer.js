import React, { Component } from 'react';

import './Artis.css';

const footerStyle = {
  textAlign: "center",
  marginTop: "2em"
};

const linkDark = {
  color: "white"
};

export default class Footer extends Component {
  render() {
    return(
      <div style={footerStyle}>
        <h5>@poetrique &copy; 2018 | All Rights Reserved</h5>
        <h6><a style={linkDark} href="https://twitter.com/Usheninte">Coded by Usheninte</a></h6>
      </div>
    );
  }
}