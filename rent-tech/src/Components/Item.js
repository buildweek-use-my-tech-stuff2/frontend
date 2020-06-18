import React from 'react';


	const Item = (props) => {


	    return (
	        <div className="item">
	            <h2>{props.character.name}</h2>
	            <img src={pics[props.id]} />
	        </div>
	    );
	}
	

	export default Item;