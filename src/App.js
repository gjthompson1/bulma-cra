import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Test1 from './Test1'
import Test2 from './Test2'
import { NavLink } from 'react-router-dom';
import logo from './assets/wifi.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero is-primary is-medium">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img src={logo} alt="Logo"/>
                  </a>
                  <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id="navbarMenuHeroA" className="navbar-menu">
                  <div className="navbar-end">
                    <NavLink to='/test1' className='navbar-item' activeClassName="is-active">
                      Test1
                    </NavLink>
                    <NavLink to='/test2' className='navbar-item' activeClassName="is-active">
                      Test2
                    </NavLink>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                Hero
              </h1>
              <h2 className="subtitle">
                Subtitle
              </h2>
            </div>
          </div>

        </section>
        <Switch>
          <Route exact path='/test1' component={Test1} />
          <Route path='/test2' component={Test2}/>
        </Switch>
      </div>
    );
  }
}

export default App;
