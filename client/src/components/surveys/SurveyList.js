import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSurveys} from "../../actions";

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys   () {
        return this.props.surveys ? this.props.surveys.map(survey => {
            console.log(survey)
            return (
                <div className="card darken-1" key={survey._id}>
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                        <p>{survey.body}</p>
                        <p className="right">
                            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                            </p>
                    </div>
                    <div className="card-action">
                        <a>Yes: {survey.yes}</a>
                        <a>Yes: {survey.no}</a>
                    </div>
                </div>
            );
        }) : null
    }

    render() {
        return (
            <div>{this.renderSurveys()}</div>
        );
    }
}

function mapStateToProps(state) {
    return {surveys: state.surveys}
}

export default connect(mapStateToProps, {fetchSurveys})(SurveyList);