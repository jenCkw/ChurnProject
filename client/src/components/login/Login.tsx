import { useState } from 'react';
import { useLoginMutation } from '../../generated/graphql';
import { useHistory } from 'react-router-dom'
import {  setAccessToken } from '../authentication/accessToken';
import {Grid, Avatar, Paper, Button, TextField} from '@material-ui/core';
import LockOpenIcon from '@mui/icons-material/LockOpen';



// style for the login 
const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 300,
    margin: '20px auto'
}

const textfieldStyle = {
    margin:'10px'
}

const avatarStyle = {
    backgroundColor: '#2f7fad'
}



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login] = useLoginMutation();

    const history = useHistory();


    return (
        <div className="col-md-4 m-auto" >
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                <Grid item container  justifyContent="center">
                    <Avatar style={avatarStyle}>
                        <LockOpenIcon/>
                    </Avatar>
               
                </Grid>
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
            >
               <TextField 
                    style={textfieldStyle}
                    type="email" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    fullWidth 
                    placeholder="Email address" 
                    label="Email" 
                    required
                    variant="standard"
                />
                <TextField 
                    onChange={(e)=> setPassword(e.target.value)}
                    type="password" 
                    fullWidth 
                    value={password}
                    placeholder="Password" 
                    label="Password" 
                    required
                    variant="standard"
                    style={textfieldStyle}
                />
               
               <Button type="submit" style={{marginTop:'20px'}} color="primary" variant="contained" fullWidth>Sign in</Button>
               
            </form>
            </Paper>
            </Grid>
    </div>
    )
}

export default Login
