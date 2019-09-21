import React from 'react';

const Gif = ({gif_src}) =>{
	return(
			<div>
				<img src={gif_src} alt="funny gif"/>
			</div>
		)
}

export default Gif;