import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Oauth2.css';
import AppBarView from '../components/AppBarView';
import ShareView from '../components/ShareView';


export default class Oauth2 extends React.Component {
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
                      <h2>Oauth 2.0</h2>
                      <p>มาตรฐานการเชื่อมต่อสำหรับการอนุญาต เพื่อให้ง่ายต่อนักพัฒนาฝั่งไคลเอ็นต์สำหรับการพัฒนาแอพพลิเคชัน</p>
                    </Col>
                  </Row>
                </Container>

                <ShareView/>
            </div>
        );
      }
}