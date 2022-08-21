import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { FavoritesContextProvider } from '../store/favorite-context';

function FavoritesPage() {
  useContext();

  return (
    <section>
      <h1>All Favorites</h1>
    </section>
  );
}

export default FavoritesPage;
