import { useState, useEffect } from 'react';
import { setAccessToken } from './components/authentication/accessToken';

import Routers from "./Route"

function App() {
    const [loading, setLoading] = useState(true);

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

    useEffect(()=>{
      fetch('http://localhost:4000/refresh_token',
      {
          method:"POST",
          credentials: "include"
      }
      )
      .then(async x => {
          const {accessToken} = await x.json()
          setAccessToken(accessToken)
          setLoading(false);
      })
    },[])


    if(loading){
        return <div>Loading...</div>
    }
    return <Routers/>
    
    }
export default App
