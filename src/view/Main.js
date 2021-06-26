import React from 'react';
import './Main.css';
import Contents from '../components/Contents';
import AppBarView from '../components/AppBarView';
import ViewPage from '../components/ViewPage';
import {Container,Row, Col } from 'reactstrap';
import Unity from '../components/Unity';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

    render() {
        return (
            <div>
                <AppBarView context={this.props}/>
                <Container fluid>
                  {/* <Row>
                    <Col xs="8">
                      <Contents context={this.props}/>
                    </Col>
                    <Col xs="4">
                      <ViewPage/>
                    </Col>
                  </Row> */}
                  <Unity/>
                </Container>
            </div>
        );
    }
}

