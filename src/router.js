import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import  App from  './App'
import Home from './wy/index'
class RootRouter extends Component{
    render() {
        return(
            <App>
                <HashRouter>
                    <Switch>
                        <Route path='/home' component={Home}>Hello</Route>
                    </Switch>
                </HashRouter>
            </App>
        )
    }
}
export default RootRouter
