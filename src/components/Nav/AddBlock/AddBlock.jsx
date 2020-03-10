import React from "react";
import classes from "./AddBlock.module.css";

const BlockItem = props => {
  let l = props.name.length;
  let name;
  if (l <= 6) {
    name = props.name;
  } else {
    name = props.name.substr(0, 2) + "-" + props.name.substr(l - 3);
  }
  return (
    <div className={classes.usrItem}>
      <img src={props.avatar} />
      <span>{name}</span>
    </div>
  );
};

const AddBlock = props => {
  let i = 0;
  let usrsInfo = props.usrs.map(function(u) {
    let out;
    if (u.id != 0 && i < 9) {
      out = <BlockItem id={u.id} name={u.name} avatar={u.avatar} />;
      i++;
    }
    return out;
  });

  return (
    <div className={classes.box}>
      <h5>{props.head}</h5>
      {usrsInfo}
    </div>
  );
};

export default AddBlock;
