import React, {Component} from 'react';
import Post from '../components/Post.js';
import Gif from '../components/Gif.js';
import FactCard from '../components/FactCard.js';
import Scroll from '../components/Scroll.js';
import TopBanner from '../components/TopBanner.js';
import BottomBanner from '../components/BottomBanner.js';

import './App.css';
import 'tachyons'


class App extends Component {
  constructor(){
    super();
    this.state = {
        usernames: [],
        profile_imgs: [],
        facts: []
      }

    this.num_of_entrys = 9;
    this.cat_pic_api = "https://cataas.com/cat?width=150&height=100&uniqueNum=";
    this.cat_gif_api = "https://cataas.com/cat/gif?uniqueNum=";
    this.facts_api = "https://uselessfacts.jsph.pl/random.json?language=en";
    this.usernames_api = "https://randomuser.me/api/";
  }

  componentDidMount(){
    this.grabUserNames(this.num_of_entrys);
    this.grabFacts(this.num_of_entrys);
    this.grabUsersProfileSrcs(this.num_of_entrys);
  }


  async grabUserNames(num_of_entrys){
    const usernames = await Promise.all([...Array(num_of_entrys)].map(()=> this.grabUserName()));
    this.setState({usernames: usernames})
  }

  async grabUserName(){
    const resp = await fetch(this.usernames_api);
    const data = await resp.json();
    const {title, first, last} = data['results'][0]['name'];
    const username = `${title}. ${first} ${last}`;
    return username;
  }

  async grabUsersProfileSrcs(num_of_entrys){
    const profile_imgs_srcs = [...Array(num_of_entrys)].map(()=>{
            const rand = Math.ceil(Math.random()*10000).toString();
            return this.cat_pic_api + rand; 
      });
    this.setState({profile_imgs: profile_imgs_srcs});
  }

  async grabFacts(num_of_entrys){
    const facts = await Promise.all([...Array(num_of_entrys)].map(()=> this.grabFact()));
    this.setState({facts: facts});
  }

  async grabFact(){
    const resp = await fetch(this.facts_api);
    const data = await resp.json();
    return data['text'];
  }

  createFactPost(key, username, profile_img_src, fact){
    return this.createPost(key, <FactCard fact={fact}/>, username, profile_img_src);
  }

  createGifPost(key, username, profile_img_src){
    const rand = Math.ceil(Math.random()*10000).toString();
    return this.createPost(key, <Gif gif_src={this.cat_gif_api + rand}/>, username, profile_img_src);
  }


  createPost(key, content, username, profile_img_src){
    return (
          <Post
            key = {key} 
            content= {content}
            user_pic_src= {profile_img_src}
            username= {username}/>
      )
  }

  createFeed(usernames, profile_imgs, facts){
    const min_length = Math.min(usernames.length,
                                profile_imgs.length,
                                facts.length);
    let posts_arr = []
    let i = 0;
    for (; i<min_length; i++){
      if (Math.round(Math.random())){
        posts_arr.push(this.createFactPost(i, usernames[i], profile_imgs[i], facts[i]));
      } else {
        posts_arr.push(this.createGifPost(i, usernames[i], profile_imgs[i]));
      }
    }
    return posts_arr;
  }




  render(){
    const {usernames, profile_imgs, facts} = this.state;
    console.log(this.state);
    return (
      <div className="flex flex-column tc">
        <TopBanner />
        <div className="flex justify-center">
          <p> Text </p>
          <Scroll>
            {this.createFeed(usernames, profile_imgs, facts)}
          </Scroll>
          <p> Text </p>
        </div>
        <BottomBanner />
      </div>
    );
  }
}

export default App;
