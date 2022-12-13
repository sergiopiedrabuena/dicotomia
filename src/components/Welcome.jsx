import React from 'react'
import "@styles/Welcome.scss";

setTimeout(() =>{
    let welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.style.display = "none"
},3000);

const Welcome = () => {
    return (
        <div className='welcomeMessage'
            id='welcomeMessage'
            >
            <p>bienvenido</p>
        </div>
    )
}

export default Welcome