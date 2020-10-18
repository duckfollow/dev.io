import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import profile from '../assests/img/profile.jpg';
import logo from '../assests/img/logo.svg';
import "./AppBarView.css";

export default class AppBarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      AnchorEl: null
    }
    this.inputRef = React.createRef();
  }

  handleMenu = (event) => {
    // this.setState({menu: true,AnchorEl:event.currentTarget})
    this.props.context.history.push('/aboutme');
  };

  handleClose = () => {
    this.setState({menu: false,AnchorEl:null})
  };

  home () {
    this.props.context.history.push('/');
  }

  render() {
    return (
        <AppBar className="root" position="static" color="inherit" ref={this.inputRef}>
          <Toolbar>
                <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu" onClick={this.home.bind(this)}>
                  <img className="img-logo" src={logo} alt="img-logo"/>
                </IconButton>
            <Typography variant="h6" className="title">
              dev.io
            </Typography>
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleMenu.bind(this)}
                  color="inherit"
                >
                  <img className="img-profile" src={profile} alt="img-profile"/>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.AnchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={this.state.menu}
                  onClose={this.handleClose.bind(this)}
                >
                  <MenuItem onClick={this.handleClose.bind(this)}>About Me?</MenuItem>
                </Menu>
              </div>
          </Toolbar>
        </AppBar>
    );
  }
}
