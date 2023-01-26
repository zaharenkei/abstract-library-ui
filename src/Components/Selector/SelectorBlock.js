import React from 'react';
import './Selector.css';

class SelectorBlock extends React.Component {

    render() {
        return (
            <div id="selectorBlock" className="selector">
                <div id="selectorItem">
                    <a href="#">Items</a>
                </div>
                <div id="selectorItem">
                    <a href="#">Spells</a>
                </div>
                <div id="selectorItem">
                    <a href="#">Creatures</a>
                </div>
            </div>
        );
    }
}

export default SelectorBlock;