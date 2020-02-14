import React from 'react'

const SearcBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
 		  <input 
 		  	className='pa2 ba b--green bg-lightest-blue'
 		  	type='search' 
 		  	placeholder='search robots'
 		  	onChange={searchChange}
 		  />
 		</div>
	);
}

export default SearcBox;