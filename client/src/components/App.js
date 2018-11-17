import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions'
import Header from './Header';
import Surveys from './Surveys';
import Landing from './Landing';

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();

    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact to={"/"} component={Landing}/>
                        <Route exact to={"/surveys"} component={Surveys}/>

                    </div>
                </BrowserRouter>
            </div>

        );
    }
}

export default connect(null, actions)(App);