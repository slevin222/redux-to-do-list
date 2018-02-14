import React, { Component } from 'react';
import { connect } from "react-redux";
import { getAllTodos } from '../actions';

class Home extends Component {

    componentDidMount() {
        this.props.getAllTodos();
    }

    render() {
        return (
            <div>
                <div className="text-center">
                    <h1>To Do List</h1>
                    <p>Now with Redux!</p>
                </div>
            </div>
        )
    }
}

export default connect(null, { getAllTodos })(Home);