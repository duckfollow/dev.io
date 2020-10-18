import React from 'react';
import './AboutMe.css';
import profile from '../assests/img/profile.jpg';
import facebook from '../assests/img/facebook.svg';
import instagram from '../assests/img/instagram.svg';
import twitter from '../assests/img/twitter.svg';
import github from '../assests/img/github.svg';

export default class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    home () {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="App-content">
                <img src={profile} className="img-circle img-profile-aboutme noselect" alt="logo" onClick={this.home.bind(this)} />
                <p className="noselect">Prasit Suphancho</p>
                <div>
                    <a href="https://github.com/duckfollow">
                        <img src={github} className="social-width" alt="logo" />
                    </a>
                    <a href="https://www.facebook.com/p.supancho">
                        <img src={facebook} className="social-width" alt="logo" />
                    </a>
                    <a href="https://www.instagram.com/tankps/">
                        <img src={instagram} className="social-width" alt="logo" />
                    </a>
                    <a href="https://twitter.com/slammonder">
                        <img src={twitter} className="social-width" alt="logo" />
                    </a>
                </div>
            </div>
        );
    }
}
