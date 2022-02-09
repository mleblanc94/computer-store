import React from 'react';
import './Card.css';

const Card = ({name, cost, image}) => {
    return(
        <div className="tc bg-dark-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img className="center" alt="item" src={image}/>
            <div>
                <p>{name}</p>
                <h4>{cost}</h4>
            </div>
        </div>
    );
}

export default Card;