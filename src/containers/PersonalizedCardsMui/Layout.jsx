import React from 'react';
import Header from '@components/PersonalizedCardsMui/Header';

const Layout = ({ children }) => {
	return (
		<div className="PersonalizedCardsMuiLayout">
			<Header />
			{children}
		</div>
	);
}

export default Layout;
