/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import React from 'react';
import { Presets } from 'react-component-transition';
import SearchPage from '../pages/SearchPage/SearchPage';

function Routes({ Thesaurus, ...props }) {
  const location = useLocation();
  return (
    <Switch key={location.key} location={location}>
      <Route exact path="/">
        <SearchPage {...props} />
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
