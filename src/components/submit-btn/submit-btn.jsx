import React from 'react';
import './submit-btn.scss';


const SubmitBtn = ({children,...rest}) => (
    <button className="btn-submit" {...rest}>{children}</button>

)

export default SubmitBtn;