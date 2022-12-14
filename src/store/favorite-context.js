import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: favoriteMeetup => {},
  removeFavorites: meetupId => {},
  isFavorite: meetupId => {},
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
