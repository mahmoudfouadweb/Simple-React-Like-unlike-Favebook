import { FavoritesContextProvider } from '../store/favorite-context';

function FavoritesPage() {
  return (
    <section>
      <h1>All Favorites</h1>
      <FavoritesContextProvider />
    </section>
  );
}

export default FavoritesPage;
