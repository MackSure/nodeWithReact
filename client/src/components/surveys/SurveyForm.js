// SurveyForm shows a form for a user to add input
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import SurveyField from './SurveyField';
import validEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {

    renderFields () {
        return (
           _.map(formFields, ({label, name}) => {
               return <Field key={name}
                             component={SurveyField}
                             type="text" label={label}
                             name={name}/>
           })
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => this.props.onSurveySubmit())}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat left white-text">Cancel</Link>
                    <button className="teal btn-flat right white-text" type="submit">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    errors.recipients = validEmails(values.recipients);
    _.each(formFields, ({name}) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    destroyOnUnmount: false,
    form: 'surveyForm'
})(SurveyForm);