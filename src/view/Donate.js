import React from 'react';
import './Donate.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as firebase from 'firebase';

export default class Donate extends React.Component {
    
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            dataMessage: []
        }
    }

    componentDidMount() {
        try {
            const { id } = this.props.match.params
            var androidId = "a858bd72cb694a45"
            const _dataMessages = firebase.database().ref("message/"+id);
            _dataMessages.on('value', (snapshot) => {
                let dataText = []; 
                snapshot.forEach(dataMS => {
                    let data = dataMS.val();
                    dataText.push({
                        key:dataMS.key,
                        title:data.title,
                        text:data.text
                    });
                });
                console.log(dataText.length);
                if (typeof(dataText[dataText.length -1]) !== "undefined" && typeof(dataText[dataText.length -1].title) !== "undefined") {
                    toast("🥰  "+dataText[dataText.length -1].title+"\n"+dataText[dataText.length -1].text);
                }
            });
        }catch {

        }
    }

    render() {
       
        return (
            <div>
                <ToastContainer />
            </div>
        );
    }
}
