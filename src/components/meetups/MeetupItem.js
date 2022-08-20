import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  console.log('meetup item', props);
  return (
    <li id={props.id} className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>Add To Favorite</button>
      </div>
    </li>
  );
}

export default MeetupItem;
