import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflow: 'Scroll', border: '2px solid white', height: '800px'}}>
			{props.children}
		</div>
	)
};

export default Scroll;