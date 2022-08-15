import React from 'react'
import ErrorPage from '../components/ErrorPage';
import { useAppContext } from '../utils/AppContext';



const auth = () =>{
    const [context] = useAppContext()
    
    if( context.session.auth ){
        return true
    }
    return(<ErrorPage code={404} >Loremp ipsum </ErrorPage>);
}

export { auth }