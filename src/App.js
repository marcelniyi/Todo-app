import React from 'react'
import Todo from './components/Todo/Todo'
import SignIn from './components/Login'
import Register from './components/Register'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import history from './history';


class App extends React.Component {
  render(){
    return(

        <Router history={history}>
          <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/home" component={Todo}/>
          </Switch>
        </Router>
      
    )
  }
}



export default App;
