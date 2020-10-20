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
                      <h1>Oauth 2.0</h1>
                      <p>มาตรฐานการเชื่อมต่อสำหรับการยืนยันตัวตนของผู้ใช้งานและจัดการสิทธิ์ต่างๆ โดยใช้ Token แทนการใช้ Username และ Password เข้าใช้แอพพลิเคชันทำให้มีความปลอดภัยในการใช้งาน</p>
                      <h2>บทบาทของ OAuth2</h2>
                      <ul>
                        <li>resource owner : ข้อมูลของผู้ใช้งาน</li>
                        <li>resource server</li>
                        <li>client</li>
                        <li>authorization server</li>
                      </ul>
                      <h2>OAuth 2.0 Grant Types</h2>
                      <ul>
                        <li>Authorization Code</li>
                        <li>Implicit</li>
                        <li>Password (Resource Owner Password Credentials)</li>
                        <li>Client Credentials</li>
                        <li>Device Code</li>
                        <li>Refresh Token</li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
                <ShareView/>
            </div>
        );
      }
}