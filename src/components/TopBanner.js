import React from 'react';
import logo from './cat-icon.png';

const TopBanner = () =>{
	return (
			<div className="pa1">
				<img className="v-mid" src={logo} alt="icon" width="43px" height="49px"/>
				<h1 className="di v-mid"> Cat Gag </h1>
			</div>
			)
}

export default TopBanner;