import React from "react";

export const FriendCard = (props) => (
    <div className="coolPic" onClick={(e) => props._handleClick(props.name)}>
        <img src={props.img} />
        <p>{props.name}</p>
    </div>
)

export default FriendCard;