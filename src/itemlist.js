import React from 'react';
import Card from './Card';

const Itemlist = ({ items }) => {
    return (
    <div>
        <Card name={items[0].name} cost={items[0].cost} image={items[0].image} />

    </div>
    );
}

export default Itemlist;