import { StaticRouter, BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductPage from './products/[slug]';

function MyApp({ Component, pageProps }) {
  const Router = typeof window === 'undefined' ? StaticRouter : BrowserRouter;

  return (
    <Router>
      <Switch>
        <Route exact path="/products/:id">
          <ProductPage {...pageProps} />
        </Route>
        <Route>
          <Component {...pageProps} />
        </Route>
      </Switch>
    </Router>
  );
}

export default MyApp;
