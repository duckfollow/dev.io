import React from 'react';
import Chip from '@material-ui/core/Chip';

export default class Contents extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.context.history.push('/oauth2');
  }

  render() {
    return (
      <div>
        <Chip label="Oauth 2" variant="outlined" onClick={this.handleClick} />
        <Chip label="Git" variant="outlined" onClick="" />
      </div>
    );
  }
}
