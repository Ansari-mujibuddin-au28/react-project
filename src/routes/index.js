import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile';
import PropTypes from 'prop-types'

const Routes = props => {
  return (
    //Routes
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/Profile' component={Profile}/>
    </Switch>
  )
}

Routes.propTypes = {}

export default Routes