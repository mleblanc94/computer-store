import React from 'react';

const Searchbox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa3'>
            <input
            className='pa3 ba b--green bg-lightest-black'
            type='search' 
            placeholder='Search Items...'
            onChange={searchChange}
            />
        </div>
    )
}

export default Searchbox;