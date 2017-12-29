import React, { Component } from "react"
import { BrowserRouter, Route, Link, Switch, Router } from "react-router-dom"
import Home from './Home'
import Post from './Post'
import "./App.css"
import store from './redux/store'
import { Provider } from 'react-redux'
 

class NotFound extends Component {
  render() {
    return (
      <section>
        <h4>404!</h4>
        <Link to="/">Index</Link>
      </section>
    )
  }
}

class App extends Component { 
  render() { 
    return <BrowserRouter>
        <div>
          <Provider store={store}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/post" component={Post} />
              <Route component={NotFound} />
            </Switch>
          </Provider>
        </div>
      </BrowserRouter>
  }
}

export default App
