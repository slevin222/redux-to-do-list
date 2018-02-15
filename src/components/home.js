import React, { Component } from 'react';
import { connect } from "react-redux";
import { getAllTodos } from '../actions';

class Home extends Component {

    componentDidMount() {
        this.props.getAllTodos();
    }

    render() {
        console.log("Props:", this.props);
        const listItems = this.props.todoList.map((item, index) => {
            return <li className="list-group-item" key={index}>{item.title}</li>
        })


        return (
            <div>
                <div className="text-center">
                    <h1>To Do List</h1>
                    <p>Now with Redux!</p>
                </div>
                <ul className="list-group">
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