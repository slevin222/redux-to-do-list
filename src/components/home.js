import React, { Component } from 'react';
import { connect } from "react-redux";
import { getAllTodos } from '../actions';
import { Link } from 'react-router-dom';

class Home extends Component {

    componentDidMount() {
        this.props.getAllTodos();
    }

    render() {

        const listItems = this.props.todoList.map((item, index) => {
            return (
                <li className="list-group-item" key={index}>
                    <Link to={`item/${item._id}`}>{item.title}</Link>
                </li>
            );
        });

        return (
            <div className="col-md-7 offset-md-2">
                <div className="text-center">
                    <h1>To Do List</h1>
                </div>
                <div className="row justify-content-center">
                    <Link className="btn btn-outline-primary" to="/add-item">Add Item</Link>
                </div>
                <br />
                <ul className="row list-group">
                    {listItems}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todoList: state.todo.all
    }
}

export default connect(mapStateToProps, { getAllTodos })(Home);