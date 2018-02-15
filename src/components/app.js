import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import AddForm from "./add_form";


const App = () => (
    <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/add-item" component={AddForm}></Route>
    </div>
);

export default App;
