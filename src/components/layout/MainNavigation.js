import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>All Meetups</Link>
          </li>
          <li>
            <Link to={'/new-meetup'}>New Meetup</Link>
          </li>
          <li>
            <Link to={'my-favorites'}>
              Favorite <span className={classes.badge}>0</span>
            </Link>
          </li>
          <li>
            <Link to={'/my-profile'}>Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
