import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './actions/actions';
import { BrowserRouter } from "react-router-dom"; 
import getRoutes from './routes/routes'

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        {getRoutes({...this.props})}
      </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  error: state.error
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    login: actions.login,
    logError: actions.logError
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
