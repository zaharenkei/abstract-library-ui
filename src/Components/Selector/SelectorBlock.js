import React from 'react';
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
            const url = "https://5065939d-4db5-4c81-a416-ed91e25b1e42.mock.pstmn.io/categories/";
            await fetch(url)
                .then((response) => response.json())
                .then((jsonData) => this.setState({ categories: jsonData.categories }))
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
        console.log(categories);
        console.log(Array.isArray(categories));

        let components = []; 
        for (let category of categories){
            components.push(<div id="selectorItem" ownid="{category.id}" parentid="{category.parentId}"><a href="#">{category.name}</a></div>);
        }

        return (
            <div id="selectorBlock" className="selector">
                {components}
            </div>
        );
    }
}

export default SelectorBlock;