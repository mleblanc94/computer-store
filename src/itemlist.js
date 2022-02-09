import React from 'react';
import Card from './Card';

const Itemlist = ({ items }) => {
        return (
        <div>
        {
        items.map((item, i) => {
        return (
            <Card 
            key={i} 
            name={items[i].name} 
            cost={items[i].cost} 
            image={items[i].image} 
            />
            );
        })
        }
        </div>
    )
}

export default Itemlist;