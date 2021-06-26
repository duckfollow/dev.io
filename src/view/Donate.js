import React from 'react';
import './Donate.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as firebase from 'firebase';
import coinSfx from "../sounds/coin.mp3";
import classnames from 'classnames';
export default class Donate extends React.Component {
    
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            dataMessage: [],
            hidden: true
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
                    let dataCheck = ["android","ใช้งานแชทเฮดอยู่","com.google.android.googlequicksearchbox","com.android.incallui","com.spotify.music","com.google.android.gm","com.ookbee.aduang","com.global.foodpanda.android","asuk.com.android.app","com.xiaomi.discover"];
                    var ck_pack = dataCheck.includes(dataText[dataText.length -1].pack);
                    var ck_title = dataCheck.includes(dataText[dataText.length -1].title);
                    if (ck_pack !== true && ck_title !== true && tmpText !== dataText[dataText.length -1].text) {
                        tmpText = dataText[dataText.length -1].text;
                        if (dataText[dataText.length -1].pack === "th.co.truemoney.wallet") {
                            toast("🥰  "+dataText[dataText.length -1].title+"\n"+dataText[dataText.length -1].text);
                            this.playAudio()
                        } 
                    }
                }
            });
        }catch {

        }
    }

    playAudio() {
        const audioE1 = document.getElementById("myAudio");     
        audioE1.play();
    }

    clickHidden() {
        if (!this.state.hidden) {
            this.setState({hidden:true})
        } else {
            this.setState({hidden:false})
        }
    }

    render() {
        return (
            <div onClick={this.clickHidden.bind(this)}>
                <ToastContainer />
                <audio id="myAudio" controls preload="auto" autoplay className={classnames({"myAudio-hidden":this.state.hidden})}>
                    <source src={coinSfx} type="audio/mpeg"/>
                </audio>
            </div>
        );
    }
}
