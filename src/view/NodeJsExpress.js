import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './NodeJsExpress.css';
import AppBarView from '../components/AppBarView';
import ShareView from '../components/ShareView';


export default class NodeJsExpress extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

    render() {
        return (
            <div>
                <AppBarView context={this.props}/>
                <Container>
                  <Row>
                    <Col>
                        <h1>NodeJsExpress</h1>
                    </Col>
                  </Row>
                </Container>
                <ShareView/>
            </div>
        );
      }
}