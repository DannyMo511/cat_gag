import React, {Component} from 'react';
import Post from '../components/Post.js';
import Gif from '../components/Gif.js';

import './App.css';
import 'tachyons'


class App extends Component {
  constructor(){
    super();
    this.state = {
        username: ''
      }
  }

  componentDidMount(){
    this.grabUserName()
  }


  grabUserName = () =>{
    fetch("https://randomuser.me/api/")
      .then(resp => resp.json())
      .then(data => {
              let {title, first, last} = data['results'][0]['name'];
              let username = `${title}. ${first} ${last}`;

              this.setState({username: username});
            })
      }

  render(){
    const username = this.state.username;
    const gif= <Gif gif_src="https://cataas.com/cat/gif"/>
    return (
      <div className="tc">
        <Post 
            content= {gif}
            user_pic_src="https://cataas.com/cat?width=150&height=100"
            username= {username}/>
      </div>
    );
  }
}

export default App;
