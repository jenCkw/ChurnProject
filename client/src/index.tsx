import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Apolloclient from 'apollo-boost';
import { ApolloProvider} from '@apollo/react-hooks'

const client:any = new Apolloclient({
  uri: 'http://localhost:4000/graphql'
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


