import { createContext, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const FavoritesContext = createContext({
  favorites: [],
  isFavorite: meetupId => {},
  removeFavorites: meetupId => {},
  addFavorites: favoriteMeetup => {},
});

export function FavoritesContextProvider() {
  const [userFavorites, setUserFavorites] = useState([]);
  
  function addFavoriteHandler(favoritesMeetups) => setUserFavorites(prevFavorites => {
      prevFavorites.concat(favoritesMeetups);
    );
  }

  function removeFavoriteHandler(meetupId) {
    
  }

  function itemIsFavorite() {}

  return (
    <>
      <h2>new favorites</h2>
      <MeetupList>{userFavorites}</MeetupList>
    </>
  );
}

export default FavoritesContext;
