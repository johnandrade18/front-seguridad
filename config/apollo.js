import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import fetch from 'node-fetch'
import {setContext} from 'apollo-link-context';

const httpLink = createHttpLink({
    uri: 'https://agile-retreat-84897.herokuapp.com/',
    fetch
});

const authLink = setContext((_, { headers}) => {

    // leer el storage almacenado 
    const token = localStorage.getItem('token');

    return{
        headers:{
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
});

const client = new ApolloClient({

    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
});

export default client;
