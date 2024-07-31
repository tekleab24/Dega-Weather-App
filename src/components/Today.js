import React from 'react';



function Today(props) {

    return (
        <div className='Today'>
            <h1>Today</h1>
            <img className='weatherIcon'  alt='weather icon' src='icon/1.png'/>
            <p>56 / 34</p>
            <p>Partly Cloudy</p>
        </div>
    );
}

export default Today;