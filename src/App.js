import React from 'react';
import { HashRouter as Router, Route, Switch, } from 'react-router-dom'
import SignUp from './component/SignUp'
import Login from './component/Login'
import Home from './container/Home'
import Board from './container/Board'
import Container from '@material-ui/core/Container';

import NotFoundPage from './component/NotFoundPage'
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <>
      <Router>
      <CssBaseline />
        <Container maxWidth="lg">
          <React.Fragment>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/board" exact component={Board} />
              {/* componentStyle */}
              <Route path="/board/:id" >    
              {/* hooksStyle */}
                    <Board></Board>
              </Route>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route  component={NotFoundPage} />
            </Switch>
          </React.Fragment>
        </Container>
      </Router>
   
    </>
  );
}


export default App