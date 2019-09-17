import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import  App from  './App'

import Home from 'pages/home'
import User from 'pages/user'
import Cart from 'pages/cart'
import Goods from 'pages/goods'


class RootRouter extends Component{
    render() {
        return(
            <App>
                <HashRouter>
                    <Switch>
                        <Redirect exact from = '/' to='/home'></Redirect>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/user' component={User}></Route>
                        <Route path='/cart' component={Cart}></Route>
                        <Route path='/goods' component={Goods}></Route>



                    </Switch>
                </HashRouter>
            </App>
        )
    }
}
export default RootRouter
