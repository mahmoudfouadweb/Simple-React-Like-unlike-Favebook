import { createContext, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const FavoritesContext = createContext({
  favorites: [],
  isFavorite: meetupId => {},
  removeFavorites: meetupId => {},
  addFavorites: favoriteMeetup => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoritesMeetups) {
    setUserFavorites(prevFavorites => prevFavorites.concat(favoritesMeetups));
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevFavorites =>
      prevFavorites.filter(meetup => meetupId !== meetup.id)
    );
  }

  function itemIsFavorite(meetupId) {
    userFavorites.some(meetup => meetup === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addFavoriteHandler,
    removeFavorites: removeFavoriteHandler,
    isFavorite: itemIsFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
