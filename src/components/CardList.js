import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	// if (true) {
	// 	throw new Error('Noooo!!');   //this one is for ErrorBoundary, though it works only in production mode!
	// }
	return(
		<div>
			{
				robots.map((user,i) => {
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
						/>
					);
			   	})
			}
		</div>
	);
}

export default CardList;