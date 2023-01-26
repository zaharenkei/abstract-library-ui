import React from 'react';
import './Breadcrumbs.css';
import './../../Header/Header.css';
import home from './../../../Resources/home.svg';

class Breadcrumbs extends React.Component {

    render() {
        return (
            <div className="breadcrumbs">
                <ul className="breadcrumb">
                    <li className="buttonItem"><img src={home} className="buttonImage" /></li>
                    <li><a href="#">D&D</a></li>
                    <li><a href="#">Items</a></li>
                    <li><a href="#">Wealth</a></li>
                    <li>Currency</li>
                </ul>
            </div>
        );
    }
}

export default Breadcrumbs;