import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="col-md-6 m-auto" >
            <div className="card card-body mt-5">
                <h2>Connectez Vous Ici </h2>
                <form className="form" >
                    <div className="form-group">
                        <input type="text" name="username" value={username} onChange={(e)=> setUsername(e.target.value) } placeholder="Nom d'utilisateur" className="form-control rounded"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Mot de passe" className="form-control rounded"/>
                    </div>
                
                    <button type="submit" className="btn btn-primary rounded">Connection</button>
                
                </form>
            </div>
    </div>
    )
}

export default Login
