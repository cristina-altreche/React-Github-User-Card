import React from "react";

function Followers(props) {
  return (
    <div className="follower-container">
      <h3>Followers</h3>
      {
        props.followers.map(follower => (
          <div className='followers' key={follower.id}>{follower.login}</div>
        ))
      }
    </div>
  )
}

export default Followers;
