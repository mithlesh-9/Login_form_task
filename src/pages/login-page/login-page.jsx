import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './login-page.scss';

import FormInput from '../../components/form-input/form-input';
import FBLoginBtn from '../../components/fb-login-btn/fb-login-btn';
import ToggleBtn from '../../components/toggle-btn/toggle-btn';
import SubmitBtn from '../../components/submit-btn/submit-btn';

class LoginPage extends Component {
    state = {
        email:'',
        password:'',
        memorize: false
    }

    onValueChange =  event => {
        this.setState({[event.target.name]:event.target.value});
    }

    handleFormSubmission = event => {
        event.preventDefault();
        const { email, password } = this.state
        console.log('logging In...')

        // check for errors and log in users.d
    }

    handleMemorizeInput = event => {
        this.setState(prevState => ({
            memorize: !prevState.memorize
        }))
    }
    render(){
        const {errors, email, password, memorize } = this.state
        return (
        <div className="container">
        <div className="content">
        <div className="login-page" >
            <form className="login-form" onSubmit={this.handleFormSubmission}>
            <h2>Login</h2>
            <FormInput type="text" name="email" title="email" errors={errors} value={email} onChange={this.onValueChange}  />
            
            <FormInput type="password" name="password" title="password" errors={errors} value={password} onChange={this.onValueChange} />           

            <div className="rest-input">
                <Link to="#" className="forget-pwd">Forgot your password?</Link>

                <div className="toggle-btn">
                    <span className="title">Memorize</span>
                    <ToggleBtn title="minimize" defaultChecked={memorize} onChange={this.handleMemorizeInput}/>
                </div>

            </div>

            
            <SubmitBtn disabled={!email || !password} >Login</SubmitBtn>
            <p className="info">No account ? <Link to="#" className="registration">Register now</Link> </p>
        </form>
        <FBLoginBtn/>
        </div>
        </div>
        </div>
)}
}

export default LoginPage;
