import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorite-context';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  console.log(favoritesCtx);
  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have no favorites right now.</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>All Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
