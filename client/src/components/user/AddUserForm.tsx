import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useInsertUserMutation } from '../../generated/graphql';

function AddUserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [insertUser] = useInsertUserMutation();

   

    return (
        <div className="workflow p-4">
            <div className="card rounded p-2 bg-white m-auto col-md-6">
                <div className="bg-white p-2">
                    <h5 className="text-center font-weight-bold">New User</h5>
                </div>
                <hr />
                <form onSubmit={async(e)=>{
                    e.preventDefault()
                    await insertUser({
                        variables:{
                            name,
                            email,
                            password
                        }
                    });
                    history.push('/user')
                    setName("")
                    setEmail("")
                    setPassword("")
                }}>
                    <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="form1Example1">Name </label>
                        <input 
                        value={name} 
                        onChange={(e)=> setName(e.target.value)}
                        type="name" 
                        id="form1Example1" 
                        className="form-control 
                        rounded" />
                    </div>
                    <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="form1Example2">Email address</label>
                        <input
                        value={email} 
                        onChange={(e)=> setEmail(e.target.value)}
                         type="email" 
                         id="form1Example2" 
                         className="form-control rounded" 
                         />
                    </div>
                    <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="form1Example3">Password</label>
                        <input
                        value={password} 
                        onChange={(e)=> setPassword(e.target.value)}
                         type="password" 
                         id="form1Example3" 
                         className="form-control rounded" />
                    </div>
                    <div className="form-outline-mb">
                        <button type="submit" className="btn btn-success btn-block rounded">save</button>
                    </div>
                    
                </form>
            </div>
           
        </div>
    )
}

export default AddUserForm
