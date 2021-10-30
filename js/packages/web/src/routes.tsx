import {HashRouter, Route, Switch} from 'react-router-dom';
import {Providers} from './providers';
import {
  AnalyticsView,
  ArtCreateView,
  ArtistsView,
  ArtistView,
  ArtView,
  ArtworksView,
  AuctionCreateView,
  AuctionView,
  HomeView,
  StaticPageView,
} from './views';
import {AdminView} from './views/admin';
import {BillingView} from './views/auction/billing';

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
        <Providers>
          <Switch>
            <Route path="/about" component={() => <StaticPageView/>}/>
            <Route path="/" component={() => <HomeView/>}/>
          </Switch>
        </Providers>
      </HashRouter>
    </>
  );
}
