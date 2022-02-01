import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import HomeScreen from './components/screens/homeScreen/HomeScreen';
import Login from './components/screens/loginScreen/Login';
import Layout from './layout';
import PageNotFound from './PageNotFound';

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push('/auth');
    }
  }, [accessToken, loading, history]);

  return (
    <Switch>
      <Route exact path={'/'}>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>

      <Route path={'/auth'}>
        <Login />
      </Route>

      <Route path={'/search'}>
        <Layout>
          <h1>Search Results</h1>
        </Layout>
      </Route>

      <Route path={'/error'}>
        <PageNotFound />
      </Route>

      <Route path={'*'}>
        <Redirect to={'/error'} />
      </Route>
    </Switch>
  );
};

export default App;
