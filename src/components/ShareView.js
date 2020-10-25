import React from 'react';
import { UncontrolledPopover, PopoverBody } from "reactstrap";
import './ShareView.css';
import facebook from '../assests/img/facebook.svg';

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
        <div className="share-view">
          <a id="share-fb" target="_blank" href={this.state.urlShareFb} rel="noopener noreferrer">
              <img src={facebook} className="social-width" alt="logo" />
          </a>
          <UncontrolledPopover trigger="hover" placement="top" target="share-fb">
            <PopoverBody>Share facebook</PopoverBody>
          </UncontrolledPopover>
        </div>
    );
  }
}
