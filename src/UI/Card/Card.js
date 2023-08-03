import React from "react";
import classes from './Card.module.css';
const Card = (props) => {
    return(<div className={classes.card}>
    <div className={classes.content}>
      <p className={classes.heading}>{props.name}
      </p><p className={classes.para}>
        {props.date}
      </p>
     
    </div>
  </div>)
}

export default Card;