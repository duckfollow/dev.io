import React from 'react';
import './ViewPage.css';
import AnimatedNumber from "react-animated-numbers";
import * as firebase from 'firebase';
import view from '../assests/img/view.svg';
import {Row, Col } from 'reactstrap';
export default class ViewPage extends React.Component {
  
  constructor(props) {
    super(props);
    console.log(this.props.path);
    this.state = {
        number: localStorage.getItem('view')
    }
  }

  componentDidMount () {
    const dataView = firebase.database().ref("viewpage");
    dataView.on('value', (snapshot) => {
        console.log(snapshot.val().view)
        localStorage.setItem('view', snapshot.val().view);
        this.setState({number:snapshot.val().view})
    });

    var delayInMilliseconds = 5000; //1 second
    var context = this;
    setTimeout(function() {
        context.onViewUpdate();
    }, delayInMilliseconds);
  }

  onViewUpdate () {
    const dataRef = firebase.database();
    let data = {
        view: this.state.number + 1
    }
    dataRef.ref("viewpage").update(data).then(function (snapshot) {
            console.log("success")
            }, function () {
            console.log('rejected promise')
    }).catch((e) => console.log(e))
  }

  render() {
    return (
        <div>
            <Row>
                <Col xs="2">
                    <img className="img-view" src={view} alt=""/>
                </Col>
                <Col xs="10">
                    <AnimatedNumber
                        fontStyle={{ fontFamily: "Prompt", fontSize: 25 }}
                        animateToNumber={this.state.number}
                        includeComma
                        config={{ tension: 89, friction: 40 }}
                        onStart={() => console.log("onStart")}
                        onFinish={() => console.log("onFinish")}
                        /> view
                </Col>
            </Row>
        </div>
    );
  }
}
