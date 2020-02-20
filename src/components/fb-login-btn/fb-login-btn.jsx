import React from 'react';
import './fb-login-btn.scss';
import FbIcon from '../../assets/fb-icon.svg'


const FBLoginBtn = ({children,...rest}) => (
    <button className="login-with-fb">
        <img src={FbIcon} alt="fb-icon"/>
        <span className="description">connect with facebook</span>    
    </button>

)

export default FBLoginBtn;