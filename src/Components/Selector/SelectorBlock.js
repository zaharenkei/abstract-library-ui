import React from 'react';
import config from "../../Configuration/config.json";
import './Selector.css';

class SelectorBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            isLoading: true
        };
    }

    async initCategories() {
        try {
            const url = config.JAPI_URL + "/categories/1";
            await fetch(url)
                .then((response) => response.json())
                .then((jsonData) => this.setState({ categories: jsonData.categories }));
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }

    }

    componentDidMount() {
        this.initCategories();
    }

    render() {
        const {categories} = this.state;

        let components = []; 
        for (let category of categories){
            components.push(<div id="selectorItem" key={category.id} parent={category.parentId}><a href="#">{category.name}</a></div>);
        }

        return (
            <div id="selectorBlock" className="selector">
                {components}
            </div>
        );
    }
}

export default SelectorBlock;