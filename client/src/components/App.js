import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions'
import Header from './Header';
// import Surveys from './Surveys';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveryNew from './surveys/SurveyNew';

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveryNew} />
                    </div>
                </BrowserRouter>
        );
    }
}

export default connect(null, actions)(App);