import React from 'react';
import './Header.css';
import logo from './../../Resources/logo.png';
import home from './../../Resources/home.svg';
import check from './../../Resources/check.svg';
import cross from './../../Resources/cross.svg';
import question from './../../Resources/question-square.svg';

class Header extends React.Component {

    render() {
        return (
            <section className="header">
                <div className="titleSection">
                    <img src={logo} className="titleLogo" />
                    <span className="titleText">TRPG Library</span>
                </div>
                <div className="settingsPanel">
                    <ul className="buttonList">
                        <li className="buttonItem"><img src={home} className="buttonImage" /></li>
                        <li className="buttonItem"><img src={check} className="buttonImage" /></li>
                        <li className="buttonItem"><img src={cross} className="buttonImage" /></li>
                        <li className="buttonItem"><img src={question} className="buttonImage" /></li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Header;