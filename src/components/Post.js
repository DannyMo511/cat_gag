import React from 'react';


const Post = ({content, user_pic_src, username}) => {
	return (
			<div className="bg-near-white ma3"
				 style= {{background: '#ECD9A0'}}>
				<div className="tl">
					<div className="dib">
						<img className= "v-mid br4 ba b--dotted grow shadow-3 ma3"
							 src={user_pic_src} alt='user profile'/>
						<h1 className="di v-mid dim nowrap"> {username}</h1>
					</div>
				</div>
				<div className="pa3">
					{content}
				</div>
			</div>
		);

}
export default Post;