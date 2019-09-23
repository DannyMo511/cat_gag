import React from 'react';

const FactCard = ({fact}) =>{
	return (
			<div className="pa4" 
				 style={setCardColorStyle()}>
				<h2> {fact} </h2>
			</div>
		)
}

const getRandomColor = () => {
	const set = "0123456789ABCDEF";
	let color = "#";
	for(let i=0; i<6; i++){
		color += set[Math.floor(Math.random()*16)];
	}
	return color;
}

const setCardColorStyle = () =>{
	const color1 = getRandomColor();
	const color2 = getRandomColor();
	const text_color = getRandomColor();
	return {
			background: `linear-gradient(to right, ${color1}, ${color2})`,
			color: text_color 
			}
}

export default FactCard;