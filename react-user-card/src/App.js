import React from 'react';
import './App.css';

import axios from 'axios'
import GithubCard from './components/GithubCard'
import Followers from './components/Followers'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    }
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/cristina-altreche`)
    .then(res => {
      this.setState({
        user: res.data
      })
    })
    //bio, location, followers
    
    
    .catch(err => console.log('uh oh', err))
  }

  componentDidUpdate(prevState, prevProps){
    if(this.state.user !== prevState.user){
      axios.get(`https://api.github.com/users/cristina-altreche/followers`)
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
    }
  }

  render() {
    return(
      <div className='app-container'>
        <GithubCard user={this.state.user} />
        <Followers followers={this.state.followers} />
      </div>

    )
  }
}

export default App;
