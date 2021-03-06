// SurveyField contains logic to render a single label and text input
import React from 'react';

export default ({input, label, meta, meta: {touched, error, invalid}}) => {

    return (
        <div>
            {invalid && <span className="red-text">*</span>}<label>{label}</label>
            <input style={{marginBottom: '5px'}} {...input}/>
            <div className="red-text" style={{marginBottom: '20px'}}>{touched && error}</div>

        </div>
    );
}