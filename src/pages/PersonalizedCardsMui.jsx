import React from 'react'

import PersonList from '@containers/PersonalizedCardsMui/PersonList';
import '@styles/PersonalizedCardsMui/PersonalizedCardsMui.scss';

const PersonalizedCardsMui = () => {
    return(
        <>
        <div className='PersonalizedCardsMui'>
				<h1>Cartas personalizadas</h1>
				<PersonList />
			</div>
        </>
    )
}

export default PersonalizedCardsMui;