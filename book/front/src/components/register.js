import React,{Component} from 'react';
import axios from 'axios';


class Register extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        };
    }
    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    onSubmit = (e) => {
        e.preventDefault();
        const {username,password} = this.state;

        axios.post('/auth/register', {username,password})
        .then((result)=>{
            this.props.history.push('/login')
        })
    }
    render(){
        const {username, password} = this.state;
        return(
            <div class="main">
                <form onSubmit = {this.onSubmit}>
                    <h1 class="form-signin-headin">Please Register</h1>
                    <label for="inputEmail" class="sr-only">Username</label>
                    <input type="text" class="form-control" placeholder="Username" name="username" value={username} onChange={this.onChange} required></input>
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="text" class="form-control" placeholder="Enter Password" name="password" value={password} onChange={this.onChange} required></input>
                    <button class="btn btn-large btn-primary btn-block" type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Register;