import React from 'react';
import './CommentView.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Row, Col } from 'reactstrap';
import * as firebase from 'firebase';

export default class CommentView extends React.Component {
  
  constructor(props) {
    super(props);
    console.log(this.props.path);
    this.state = {
        comment: '',
        dataComment: []
    }
  }

  componentDidMount () {
    const dataComments = firebase.database().ref("comments"+this.props.path);
    dataComments.on('value', (snapshot) => {
        let dataText = []; 
        snapshot.forEach(dataComment => {
            let data = dataComment.val();
            dataText.push({
              key:dataComment.key,
              text:data.text
              });
        });

        this.setState({
            dataComment: dataText
        });
    });
  }

  onCommentChange (event) {
    this.setState({comment: event.target.value});
  }

  onComment () {
    const dataRef = firebase.database();
    let context = this;
    let today = (new Date()).toISOString()
    let data = {
        text: this.state.comment,
        date: today
    }
    if (this.state.comment !== '') {
        dataRef.ref("comments"+this.props.path).push(data).then(function (snapshot) {
            console.log("success")
            console.log(snapshot.key)
            context.setState({
                comment: ''
            })
            }, function () {
            console.log('rejected promise')
        }).catch((e) => console.log(e))
    }
  }

  handleKeyDown (event) {
    if (event.key === 'Enter') {
        this.onComment();
    }
  }

  render() {
    return (
        <div>
            <h4>แสดงความคิดเห็น..</h4>
            <Row>
            {this.state.dataComment.map((item,index) => (
                <Col sm={12} key={item.key}>
                    <div className="card-view-comment">
                        {item.text}
                    </div>
                </Col>
            ))}

            </Row>
            <TextField
                id="standard-input"
                label=""
                type="text"
                fullWidth
                autoComplete="off"
                value = {this.state.comment}
                onChange = {this.onCommentChange.bind(this)}
                onKeyDown={this.handleKeyDown.bind(this)}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button variant="contained" onClick={this.onComment.bind(this)}>comment</Button>
            <br/>
            <br/>
        </div>
    );
  }
}
