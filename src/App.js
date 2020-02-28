import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch, } from 'react-router-dom'
import SignUp from './component/SignUp'
import Login from './component/Login'
import BoardWrite from './component/BoardWrite'

import Home from './pages/Home'
import Board from './pages/Board'
import store from './store'
import NotFoundPage from './component/NotFoundPage'
import Header from './common/Header'
import Footer from './common/Footer'

import { Container, CssBaseline } from '@material-ui/core/';
 




function App() {

  let setisLogin = useState(false)[1]

  store.subscribe(() => {
    let reduxStore = store.getState()
    let reduxUserInfo = reduxStore.userInfo;
    if (reduxUserInfo) {
      setisLogin(true)
      
    }
  })

  

  return (
    <>
      <Router>
        <CssBaseline />
        <Container maxWidth="lg">
          <React.Fragment>
            <Header/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />

              <Route path="/board" exact>
                <Board></Board>
              </Route>
 
              <Route path="/board/write" component={BoardWrite}   />
              <Route component={NotFoundPage} />
            </Switch>
            <Footer />
          </React.Fragment>
        </Container>
      </Router>

    </>
  );
}


export default App