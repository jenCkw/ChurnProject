import { useState, useEffect } from 'react';
import { setAccessToken } from './components/authentication/accessToken';

import Routers from "./Route"

function App() {
    const [loading, setLoading] = useState(true);


    console.log(">>>>>>>>>>>>>+++++++++++++++++++++")
    useEffect(()=>{
        console.log("app effect")
      fetch('http://localhost:4000/refresh_token',
      {
          method:"POST",
          credentials: "include"
      }
      )
      .then(async x => {
          const {accessToken}= await x.json()
          console.log(">>>>>>>>>>>>>",accessToken)
          setAccessToken(accessToken)
          setLoading(false);
      }).catch(err => console.log(err))
    },[])

    if(loading) return <div>Loading...</div>
    return <Routers/>
    
    }
export default App
