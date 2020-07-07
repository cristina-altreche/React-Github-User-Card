import React from 'react'
import Followers from './Followers'


const GithubCard = (props) => {

return (
<div className="card-container">
    <div className="card">
      <h1>{props.user.name}</h1>
      <h4>{props.user.bio}</h4>
      <h4>{props.user.location}</h4>
    </div>
  
</div>
)
}

export default GithubCard