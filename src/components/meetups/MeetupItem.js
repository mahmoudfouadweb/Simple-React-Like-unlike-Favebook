import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  function favoriteBtnHandler() {}
  return (
    <li id={props.id} className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={favoriteBtnHandler}>add to favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
