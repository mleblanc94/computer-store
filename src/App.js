import React from 'react';
import Itemlist from './itemlist';
import Searchbox from './searchbox.js';
import { items } from './items';

const App = () => {
    return (
        <div>
            <h1>Mike's Computer Store</h1>
            <Searchbox />
            <Itemlist items={items}/>
        </div>
    )
}

export default App;