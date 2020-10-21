import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Encryption.css';
import AppBarView from '../components/AppBarView';
import ShareView from '../components/ShareView';


export default class Encryption extends React.Component {
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
                      <h1>การเข้ารหัสและถอดรหัส</h1>
                    </Col>
                  </Row>
                </Container>
                <ShareView/>
            </div>
        );
      }
}