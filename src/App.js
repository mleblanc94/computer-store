import React from 'react';
import Itemlist from './itemlist';
import { items } from './items';

const App = () => {
    return (
        <div>
            <Itemlist items={items}/>
        </div>
    )
}

export default App;