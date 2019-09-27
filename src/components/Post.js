import React, {Component} from 'react';


class Post extends Component{
	constructor({content, user_pic_src, username}){
		super();

		this.content = content;
		this.user_pic_src = user_pic_src;
		this.username = username;
	}
	render(){
		return (
			<div className="bg-near-white ma3"
				 style= {{background: '#ECD9A0'}}>
				<div className="tl">
					<div className="dib">
						<img className= "v-mid br4 ba b--dotted grow shadow-3 ma3"
							 src={this.user_pic_src} alt='user profile'/>
						<h1 className="di v-mid dim nowrap"> {this.username}</h1>
					</div>
				</div>
				<div className="pa3">
					{this.content}
				</div>
			</div>
		);
	}
}
export default Post;