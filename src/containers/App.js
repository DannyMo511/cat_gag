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
        usernames: [],
        facts: []
      }

    this.num_of_entrys = 9;
    this.cat_pic_api = "https://cataas.com/cat?width=150&height=100";
    this.cat_gif_api = "https://cataas.com/cat/gif"
  }

  componentDidMount(){
    this.grabUserNames(this.num_of_entrys);
    this.grabFacts(this.num_of_entrys);
  }


  async grabUserNames(num_of_entrys){
    const usernames = await Promise.all([...Array(num_of_entrys)].map(()=> this.grabUserName()));
    this.setState({usernames: usernames})
  }

  async grabUserName(){
    const resp = await fetch("https://randomuser.me/api/");
    const data = await resp.json();
    const {title, first, last} = data['results'][0]['name'];
    const username = `${title}. ${first} ${last}`;
    return username;
  }

  async grabFacts(num_of_entrys){
    const facts = await Promise.all([...Array(num_of_entrys)].map(()=> this.grabFact()));
    this.setState({facts: facts});
  }

  async grabFact(){
    const resp = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
    const data = await resp.json();
    return data['text'];
  }

  createFactPost(username, fact){
    return this.createPost(<FactCard fact={fact}/>, username);
  }

  createGifPost(username){
    return this.createPost(<Gif gif_src={this.cat_gif_api}/>, username);
  }


  createPost(content, username){
    return (
          <Post 
            content= {content}
            user_pic_src= {this.cat_pic_api}
            username= {username}/>
      )
  }

  render(){
    const {usernames, facts} = this.state;
    return (
      <div className="tc">
        {this.createFactPost(usernames[0], facts[0])}
        {this.createFactPost(usernames[1], facts[1])}
        {this.createGifPost(usernames[2])}
        {this.createGifPost(usernames[3])}
        
      </div>
    );
  }
}

export default App;
