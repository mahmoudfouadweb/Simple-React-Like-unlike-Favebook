import { Route, Switch } from 'react-router-dom';

import MainNavigation from './components/layout/MainNavigation';
import AllMeetupsPage from './pages/AllMeetupsPage';
import FavoritesPage from './pages/FavoritesPage';
import NewMeetupPage from './pages/NewMeetupPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path={'/'} exact>
          <AllMeetupsPage />
        </Route>
        <Route path={'/new-meetup'}>
          <NewMeetupPage />
        </Route>
        <Route path={'/my-favorites'}>
          <FavoritesPage />
        </Route>
        <Route path={'/my-profile'}>
          <ProfilePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
