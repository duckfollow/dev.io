import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './GitCommand.css';
import AppBarView from '../components/AppBarView';
import ShareView from '../components/ShareView';


export default class GitCommand extends React.Component {
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
                      <h1>Git Version Control</h1>
                      <p>ระบบจัดการควบคุมการเปลี่ยนแปลงของ Source Code</p>
                      <h2>git status</h2>
                      <ul>
                          <li>Untracked</li>
                          <li>Working Directory</li>
                          <li>Staged</li>
                          <li>Local Repository</li>
                          <li>Remote Repository</li>
                      </ul>
                      <h2>Get Started</h2>
                        <ul>
                            <li>install git</li>
                            <li>git --version</li>
                        </ul>
                        <p>Step commit cd /folder/project</p>
                        <ul>
                            <li>git init</li>
                            <li>git status</li>
                            <li>git add .</li>
                            <li>git commit -m 'message'</li>
                            <li>git push origin main</li>
                        </ul>
                      
                    </Col>
                  </Row>
                </Container>
                <ShareView/>
            </div>
        );
      }
}