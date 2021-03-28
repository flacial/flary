/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from 'react';
import { Presets } from 'react-component-transition';

const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'));

function Routes({ Thesaurus, ...props }) {
  const location = useLocation();
  return (
    <Switch key={location.key} location={location}>
      <Route exact path="/">
        <Suspense fallback={null}>
          <SearchPage {...props} />
        </Suspense>
      </Route>
      <Route exact path="/thesaurus">
        <Presets.TransitionFade>
          {Thesaurus()}
        </Presets.TransitionFade>
      </Route>
    </Switch>
  );
}

export default Routes;
