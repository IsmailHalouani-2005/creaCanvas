import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
import {Link, Route, Router, Switch, useRouteMatch, useParams} from 'react-router-dom'
import Create_Page from './components/Create_p.jsx'
import Main from './components/Main.jsx'
import { useSelector, useDispatch } from 'react-redux'
import Order from './components/Order'

// const mapStateToProps = state => {
//   return {
//       canvas: state.canvas,
//   }
// }

const  App = () => {
  let match = useRouteMatch();
  useEffect(() => console.log(match), []) 

  const canvas = useSelector(state => state.canvas)

  return (
    <div className="App">
      <div className="container">
        <Router>
          <header className="App-header">
            {match.url === '/Create' || match.url === '/Order'} ? 
            {
              <Link to="/"><i class="fas fa-arrow-left"/></Link>
            } : 
            {
              <nav className="navbar">
                <div className="navbar_left">
                  <div className="logo">
                    <a href="#home" className="logo_link">
                      <img src="" alt="" id="logo" />
                    </a>
                  </div>
                  <div className="nav">
                    <ul className="nav_list">
                      <li className="nav_item"><a href="#about">About</a></li>
                      <li className="nav_item"><a href="#create_s">Create</a></li>
                      <li className="nav_item"><a href="#contact">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </nav>
            }
            <div className="bought">
              <i className="fas fa-shopping-bag"/>
              <span className="bag-counter"> {canvas.length} </span>
            </div>
          </header>

          <Switch>
            <Route exact path='/'component={Main}/>
            <Route path='/Create' component={Create_Page}/>
            <Route path='/Order' component={Order}/>
          </Switch>

        </Router>
      </div>
    </div>
  );
}

export default App;
