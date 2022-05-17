import { connect } from 'react-redux';
import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {handleInitialData} from '../actions/shared'
import Login from './Login'
import Dashboard from './Dashboard';
import ViewPoll from './ViewPoll';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import Nav from './Nav';
import PageNotFound from './PageNotFound';

class App extends Component{
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
  return (
    <Router>
    <Fragment>
    
    {this.props.loading === true ? <p>Loading...</p> :
    this.props.loginLoading === true? <div id='login'><Login/></div> 
    :<div className='container'> 
    <div>
      <Nav />
      <Routes>
      <Route path='/'  exact element={<Dashboard/>}></Route>
      <Route path='/questions/:question_id' element={<ViewPoll/>}></Route>
      <Route path='/add' element={<NewQuestion/>}></Route>
      <Route path='/leaderboard' element={<LeaderBoard/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      </div>
      </div>}
  </Fragment>
  </Router>
  );
}
}


function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null,
    loginLoading: authedUser === 'Sign out'
  }
}

export default connect(mapStateToProps)(App);
