import React from 'react';
import './Body.css';
import SelectorBlock from '../Selector/SelectorBlock';
import Content from './Content/Content';

class Body extends React.Component {

    render() {
        return (
            <div id="body" className="body">
                <SelectorBlock />
                <Content />
            </div>
        );
    }
}

export default Body;