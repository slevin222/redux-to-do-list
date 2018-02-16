import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getOneItem } from '../actions';
import { deleteItem } from '../actions';
import { toggleCompleted } from '../actions';

class ViewItem extends Component {

    componentDidMount() {
        this.props.getOneItem(this.props.match.params.id);
    }


    handleDeleteItem(id) {

        this.props.deleteItem(id).then(() => {
            this.props.history.push('/');
        });
    }
    handleComplete(id) {
        this.props.toggleCompleted(id)
    }


    render() {
        console.log('view item ', this.props);
        const needToComplete = (this.props.item.complete) ? "Yes" : "No";
        const idProp = this.props.match.params.id;
        let unixDate = new Date(parseInt(this.props.item.created));
        let date = unixDate.toLocaleString();
        return (
            <div>
                <h2 className="text-center">View item details</h2>
                <div className="row justify-content-center">
                    <div className="card">
                        <div className="card-body">
                            <div className="col sm-6 lg-9 justify-content-center">
                                <br />
                                <h4 className="card-title">{this.props.item.title}</h4>  <br />
                                <p className="card-subtitle mb-2 text-muted">ID: {idProp}</p>
                                <p className="card-text">Info : {this.props.item.details}</p>
                                <p className="card-text">Completed : {needToComplete}</p>
                                <p className="card-text">Created : {date}</p>
                                <Link className="btn btn-outline-primary btn-sm mr-3" to="/">Return</Link>
                                <button type="button" onClick={() => this.handleComplete(idProp)} className="btn btn-outline-success btn-sm mr-3" >Complete</button>
                                <button type="button" onClick={() => this.handleDeleteItem(idProp)} className="btn btn-outline-danger btn-sm">Delete</button><br />
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

export default connect(mapStateToProps, { getOneItem, deleteItem, toggleCompleted })(ViewItem);

//display all info from item desctiption in item from array detail titleetc.
///add delete button toggle complete btn delete info from server and lick back to home page when deleted
//