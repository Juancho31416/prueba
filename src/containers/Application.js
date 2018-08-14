import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import Todo from './TodoList';
 
class Application extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return <Todo />;
        } else {
            return <Login />;
        }
    }
}
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}
 
export default connect(mapStateToProps)(Application);