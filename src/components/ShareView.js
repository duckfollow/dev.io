import React from 'react';
import './ShareView.css';

export default class ShareView extends React.Component {
  
  constructor(props) {
    super(props);
    let url = window.location.href;
    console.log(url);
    this.state = {
        urlShareFb: "https://www.facebook.com/sharer/sharer.php?u="+url
    }
  }

  render() {
    return (
      <div>
        <a target="_blank" href={this.state.urlShareFb} rel="noopener noreferrer">facebook</a>
      </div>
    );
  }
}
