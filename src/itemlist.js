import React from 'react';
import Card from './Card';

const Itemlist = ({ items }) => {
    const itemComponent = items.map((item, i) => {
        return (
            <Card name={items[i].name} cost={items[i].cost} image={items[i].image} />
        )
    })
    return (
    <div>
        {itemComponent}
    </div>
    );
}

export default Itemlist;