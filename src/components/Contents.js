import React from 'react';
import Chip from '@material-ui/core/Chip';
import './Contents.css';

export default class Contents extends React.Component {
  
  constructor(props) {
    super(props);
    console.log(props);
  }

  handleClick(path) {
    this.props.context.history.push(path);
  }

  render() {
    return (
      <div className="root">
        <Chip className="chip-view" label="Oauth 2" variant="outlined" onClick={this.handleClick.bind(this,'/oauth2')}/>
        <Chip className="chip-view" label="Git" variant="outlined" onClick={this.handleClick.bind(this,'/git')}/>
      </div>
    );
  }
}
