import React from 'react';
import Itemlist from './itemlist';
import Searchbox from './searchbox.js';
import { items } from './items';

const state = {
    
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            items: items,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        const filteredItems = this.state.items.filter(item => {
            return item.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        console.log(filteredItems);
    }

    render() {
    return (
        <div className='tc'>
            <h1>Mike's Computer Store</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <Itemlist items={this.state.items}/>
        </div>
    )
    }
}

export default App;