import React from 'react';
import './Main.css';
import Contents from '../components/Contents';
import AppBarView from '../components/AppBarView';
import { Button } from 'reactstrap';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

    render() {
        return (
            <div className="App">
                <AppBarView context={this.props}/>
                <Contents context={this.props}/>
            </div>
        );
    }
}

