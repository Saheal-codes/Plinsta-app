import React from "react";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import Userdata from "./Userdata";
import "./UserItem.css";

const UserItem = (props) => {
  return (
    <li className="user-item" onClick={Userdata}>
      <Card className="user-item__content">
        <Link to={`/users/${props.id}`}>
          <div className="user-item__image">
            <Avatar
              image={"http://localhost/public/" + props.image}
              alt={props.name}
            />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
