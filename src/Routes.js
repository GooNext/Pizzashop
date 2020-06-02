 import React from 'react'
 import {Switch, Route} from 'react-router-dom'
import App from './containers/App/App'
import Cart from './components/Cart/Cart'

 const Routes = () => {
     return (
         <Switch>
             <Route path = '/' component = {App}/>
             <Route path = '/cart' component = {Cart} exact/>
         </Switch>
     )
 }
 
 export default Routes