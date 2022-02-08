import React from 'react';
import alienware from './alienware.avif';
import './Card.css'

const Card = () => {
    return(
        <div className="bg-dark-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img className="center" alt="item" src={alienware}/>
            <div>
                <h2>Alienware Computer</h2>
                <h4>$3,640.67</h4>
            </div>
        </div>
    );
}

export default Card;