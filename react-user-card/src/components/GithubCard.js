import React from 'react'
import Followers from './Followers'


const GithubCard = (props) => {

return (
<div className="card-container">
    <div className="card">
      <h1>{props.user.name}</h1>
      <img src={props.user.avatar_url}></img>
      <p><span>Bio:</span> {props.user.bio}</p>
      <p><span>Location:</span> {props.user.location}</p>
    </div>
  
</div>
)
}

export default GithubCard