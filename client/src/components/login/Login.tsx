import { useState } from 'react';
import { useLoginMutation } from '../../generated/graphql';
import { useHistory } from 'react-router-dom'
import {  setAccessToken } from '../authentication/accessToken';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login] = useLoginMutation();

    const history = useHistory();


    return (
        <div className="col-md-4 m-auto" >
        <div className="card card-body rounded mt-5">
            <h2 className="text-center font-weight-bold text-primary">Sign In </h2>
            <form
            onSubmit={async (e)=>{
                e.preventDefault();
                const response = await login({
                    variables:{
                        email,
                        password
                    }
                })
                if(response && response.data){
                   setAccessToken(response.data.login.accessToken);
                }
                history.push('/');
            }}
             className="form" >
                <div className="form-group">
                    <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email .." className="form-control rounded"/>
                </div>
                <div className="form-group">
                    <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password " className="form-control rounded"/>
                </div>
                <button type="submit" className="btn btn-primary btn-block rounded">Sign in</button>
               
            </form>
        </div>
    </div>
    )
}

export default Login
