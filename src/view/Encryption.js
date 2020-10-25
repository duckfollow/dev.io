import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Encryption.css';
import AppBarView from '../components/AppBarView';
import ShareView from '../components/ShareView';
import CommentView from '../components/CommentView';


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
                      <p>จุดประสงค์ของการเข้ารหัสข้อมูล</p>
                      <ul>
                          <li>Confidentiality</li>
                          <li>Integrity</li>
                          <li>Authentication/Nonrepudiation</li>
                      </ul>
                      <h2>การเข้ารหัสข้อมูล (Cryptography)</h2>
                      <h4>อัลกอริทึมในการเข้ารหัสข้อมูล</h4>
                      <ul>
                          <li>อัลกอริทึมแบบสมมาตร (Symmetric key algorithms)</li>
                          <li>อัลกอริทึมแบบอสมมาตร (Asymmetric key algorithms)</li>
                      </ul>
                    </Col>
                  </Row>
                  <ShareView/>
                  <CommentView path="/encrypt"/>
                </Container>
            </div>
        );
      }
}