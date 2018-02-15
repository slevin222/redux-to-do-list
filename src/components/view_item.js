import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getOneItem } from '../actions';

class ViewItem extends Component {

    componentDidMount() {
        this.props.getOneItem(this.props.match.params.id);
    }


    render() {
        console.log('view item ', this.props.item);
        const needToComplete = (this.props.item.complete) ? "Yes" : "No";
        return (
            <div>
                <h2 className="text-center">View item details</h2>
                <div className="row justify-content-center">
                    <div className="card">
                        <div class="card-body">
                            <div className="col sm-6 lg-9 justify-content-center">
                                <br />
                                <h4 className="card-title">{this.props.item.title}</h4>  <br />
                                <p className="card-subtitle mb-2 text-muted">ID: {this.props.match.params.id}</p>
                                <p className="card-text">Info : {this.props.item.details}</p>
                                <p className="card-text">Completed : {needToComplete}</p>
                                <p className="card-text">Created : {this.props.item.created}</p>
                                <Link className="btn btn-outline-primary btn-sm mr-3" to="/">Return</Link>
                                <Link className="btn btn-outline-success btn-sm mr-3" to="/">Complete</Link>
                                <Link className="btn btn-outline-danger btn-sm" to="/">Delete</Link><br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
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