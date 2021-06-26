import React from 'react';
import './Unity.css';
import {Container,Row, Col } from 'reactstrap';
import Typical from 'react-typical'
import * as firebase from 'firebase';

export default class Unity extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      number: localStorage.getItem('view'),
      ckView: localStorage.getItem('view'),
      steps: [
        '$ ssh root@dev.io', 1000,
        '$ sudo bash', 1000,
        '$ Hello World!', 1000,
        '$ my name is tankps', 1000,
        '$ I am programmer', 4000,
        '$ main stack', 1000,
        '$ view '+(localStorage.getItem('view') === null? 0:localStorage.getItem('view')) +'...', 1000,
        // '$ I can wait', 3000,
        // '$ I can vary typing speed', 2000,
        // '$ Install me now', 1000,
        // '$ npm install --save react-typical'
      ]
    }
  }

  componentDidMount () {
    const dataView = firebase.database().ref("viewpage");
    dataView.on('value', (snapshot) => {
        console.log(snapshot.val().view)
        localStorage.setItem('view', snapshot.val().view);
        this.setState({number:Number(snapshot.val().view)})
    });

    var delayInMilliseconds = 5000; //1 second
    var context = this;
    setTimeout(function() {
        context.onViewUpdate();
        if (context.state.ckView === null) {
          window.location.reload()
        }
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
                <Typical
                    steps={this.state.steps}
                    loop={Infinity}
                    wrapper="p"
                    className="content-typo"
                />
            </div>
        );
    }
}

