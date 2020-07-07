import React from 'react'
import Followers from './Followers'


const GithubCard = (props) => {

return (
<div className="card-container">
    <div className="card">
      <h1>{props.user.name}</h1>
      <h5>{props.user.bio}</h5>
      <h5>{props.user.location}</h5>
    </div>
  
</div>
)
}

export default GithubCard