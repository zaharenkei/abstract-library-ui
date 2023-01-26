import React from 'react';
import './Selector.css';

class SelectorToggle extends React.Component {

    switch() {
        var selector = document.getElementById("selectorBlock");
        var content = document.getElementById("content");

        if (selector.style.width == "0%") {

            selector.style.width = "15%";
            content.style.width = "85%";
        } else {

            selector.style.width = "0%";
            content.style.width = "100%";
        }
    }

    render() {
        return (
            <div id="selectorToggle">
                <div id="selectorItem">
                    <a onClick={this.switch}>Categories</a>
                </div>
            </div>
        );
    }
}

export default SelectorToggle;