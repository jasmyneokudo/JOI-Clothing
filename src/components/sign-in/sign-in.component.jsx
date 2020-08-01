import React from 'react';

import FormInput from '../form-input/form-input.component';

import Button from '../button/button-component'

import './sign-in.styles.scss';

import {auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({emai:'', password:''});
        }catch(error){
            console.error(error);
        }

        this.setState({email:'', password:''});
    }

    handleChange = event => {

        const {value, name} = event.target;

        this.setState({[name]: value});
    }


    render() {

        return(

            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>

                <span>Sign In With Your Email And Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                     name="email" 
                     label='email'
                     handleChange={this.handleChange} 
                     type="email" value={this.state.email} 
                     required/>
                    <FormInput 
                      name="password" 
                      label='password'
                      type="password"
                      handleChange={this.handleChange}
                      value={this.state.password}
                      required/>

                    <div className='buttons'>
                        <Button type="submit" >Sign In</Button>
                        <Button 
                        isGoogleSignIn
                        onClick={signInWithGoogle} >
                            {' '}
                            Sign in with Google {' '}
                        </Button>
                    </div>
                   
                </form>
            </div>
        )
    }
    
}

export default SignIn;