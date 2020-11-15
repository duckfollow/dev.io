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
            var androidId = id
            // "a858bd72cb694a45"
            var tmpText = ""
            const _dataMessages = firebase.database().ref("message/"+androidId);
            _dataMessages.on('value', (snapshot) => {
                let dataText = []; 
                snapshot.forEach(dataMS => {
                    let data = dataMS.val();
                    dataText.push({
                        key:dataMS.key,
                        pack:data.pack,
                        title:data.title,
                        text:data.text
                    });
                });
                console.log(dataText.length);
               
                if (typeof(dataText[dataText.length -1]) !== "undefined" && typeof(dataText[dataText.length -1].title) !== "undefined") {
                    let dataCheck = ["android","ใช้งานแชทเฮดอยู่","com.google.android.googlequicksearchbox","com.android.incallui","com.spotify.music","com.google.android.gm","com.ookbee.aduang","com.global.foodpanda.android","asuk.com.android.app"];
                    var ck_pack = dataCheck.includes(dataText[dataText.length -1].pack);
                    var ck_title = dataCheck.includes(dataText[dataText.length -1].title);
                    if (ck_pack !== true && ck_title !== true && tmpText !== dataText[dataText.length -1].text) {
                        tmpText = dataText[dataText.length -1].text;
                        toast("🥰  "+dataText[dataText.length -1].title+"\n"+dataText[dataText.length -1].text);
                    }
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
