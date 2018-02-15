import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getOneItem } from '../actions';

class ViewItem extends Component {

    componentDidMount() {
        this.props.getOneItem(this.props.match.params.id);
    }


    render() {
        // console.log('view item ', this.props)
        return (
            <div>
                <h1 className="text-center">
                    View item details
                </h1>
                <div className="row justify-content-end">
                    <Link className="btn btn-outline-primary" to="/">Return</Link>
                </div>
                <p>ID: {this.props.match.params.id}</p>
                <h3>Title: {this.props.item.title}</h3>
            </div>
        )
    }


}

function mapStateToProps(state) {
    return {
        item: state.todo.single
    }
}

export default connect(mapStateToProps, { getOneItem })(ViewItem);

//display all info from item desctiption in item from array detail titleetc.
///add delete button toggle complete btn delete info from server and lick back to home page when deleted
//