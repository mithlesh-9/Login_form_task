import React from 'react';
import './form-input.scss';


const FormInput = ({title,...rest}) => (
    <div className="form-group">
        <input className="form-input" {...rest} required/>
        <label htmlFor={title}>{title}</label>
    </div>
    )

export default FormInput;
