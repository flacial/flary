import {
    Switch,
    Route,
    useLocation
} from 'react-router-dom'
import React from 'react';
import SearchPage from '../components/RequestPage/SearchPage/SearchPage';
import { Presets } from 'react-component-transition';

function Routes({ ThesaurusPageComponent, ...props }) {
  const location = useLocation();
    return (
        <Switch key={location.key} location={location} >
          <Route exact path='/'>
            <SearchPage {...props} />
          </Route>
          <Route exact path='/thesaurus'>
            <Presets.TransitionFade>
              {ThesaurusPageComponent()}
            </Presets.TransitionFade>
          </Route>
        </Switch>
    )
}

export default Routes
