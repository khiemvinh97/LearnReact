import React from 'react';


function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  )
}

function Avatar(props) {
  return (
    <img className="avatar"
      src={props.author.avatarUrl}
    />
  )

}
function UserInfo(props) {
  return(
    <div className="UserInfo">
    <Avatar author={props.author} />
    <div className="UserInfo-name">
      {props.author.name}
    </div>
  </div>
  )
}

export default Comment