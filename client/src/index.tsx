import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider} from '@apollo/react-hooks'
import { getAccessToke } from './components/authentication/accessToken';
import ApolloClient from 'apollo-boost';



const client:any = new ApolloClient({
  uri:'http://localhost:4000/graphql',
  request: (operation) =>{
    const accessToken = getAccessToke();
    if(accessToken){
      operation.setContext({
        headers:{
          authorization: `bearer ${accessToken}`
        }
      });
  }
  }
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


