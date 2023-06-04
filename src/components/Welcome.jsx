import React, { useState, useEffect } from 'react';
import "@styles/Welcome.scss";

setTimeout(() =>{
    let welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.style.display = "none"
},3000);

const Welcome = () => {
    const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('visited');

    if (hasVisited) {
      setShowWelcome(false);
    } else {
      localStorage.setItem('visited', 'true');
    }
  }, []);

  return (
    <div className='welcomeMessage' id='welcomeMessage'>
      <p>{showWelcome ? 'Bienvenido' : 'Bienvenido nuevamente'}</p>
    </div>
  );
}

export default Welcome;