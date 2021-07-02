import React from 'react'
import CacheBuster from './CacheBuster';
import { Switch, Route } from "react-router-dom";
import Homepage from './containers/Home'
import Cursor from './components/cursor/Cursor'

function App() {
  return (
    <CacheBuster>

      {({ loading, isLatestVersion, refreshCacheAndReload }) => {
        if (loading) return null;
        if (!loading && !isLatestVersion) {
          refreshCacheAndReload();
        }
        return (
          <div className="App">
            <Cursor />
            <Switch>
              <Route exact path='/' component={Homepage} />
            </Switch>
          </div>
        )
      }}
      
    </CacheBuster>
  );
}

export default App;
