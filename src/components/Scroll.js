import React from 'react';
import "./Scroll.css";

const Scroll = (props) => {
	return (
		<div className="flex-auto ba overflow-y-scroll"
			 onScroll= {props.onScroll}
			 style={{
					height: '80vh', background: '#FFF3D0',}}>
			{props.children}
		</div>
		);
};

export default Scroll;