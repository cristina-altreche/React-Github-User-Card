import React from "react";

function Followers(props) {
  return (
    <>
      {
        props.followers.map(follower => (
          <div key={follower.id}>{follower.login}</div>
        ))
      }
    </>
  )
}

export default Followers;
