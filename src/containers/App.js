import React, {Component} from 'react';
import Post from '../components/Post.js';
import Gif from '../components/Gif.js';
import FactCard from '../components/FactCard.js';

import './App.css';
import 'tachyons'


class App extends Component {
  constructor(){
    super();
    this.state = {
        username: 'loading...',
        fact: 'loading...'
      }
  }

  componentDidMount(){
    this.grabUserName();
    this.grabFact();
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

  grabFact = () =>{
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
      .then(resp => resp.json())
      .then(data => this.setState({fact: data['text']}))
    }

  render(){
    const username = this.state.username;
    const gif = <Gif gif_src="https://cataas.com/cat/gif"/>
    const fact_card = <FactCard fact={this.state.fact}/>
    return (
      <div className="tc">
        <Post 
            content= {fact_card}
            user_pic_src="https://cataas.com/cat?width=150&height=100"
            username= {username}/>
      </div>
    );
  }
}

export default App;
