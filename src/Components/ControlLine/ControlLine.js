import React from 'react';
import './ControlLine.css';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import SelectorToggle from '../Selector/SelectorToggle';

class ControlLine extends React.Component {

    render() {
        return (
            <section className="controlLine">
                <SelectorToggle />
                <Breadcrumbs />
            </section>
        );
    }
}

export default ControlLine;