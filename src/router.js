import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import  App from  './App'

import Home from './wy/index'

import Wbr from 'pages/wbr'

class RootRouter extends Component{
    render() {
        return(
            <App>
                <HashRouter>
                    <Switch>

                        <Route path='/home' component={Home}></Route>

                        <Route path='/mxy' render={()=>{
                            return (
                                <p>骚猫和洋洋真聪明</p>
                            )
                        }}></Route>

                    {/* <Redirect exact from = '/' to ='/wbr'> </Redirect> */}
                        <Route path="/wbr" component={Wbr}></Route>

                    </Switch>
                </HashRouter>
            </App>
        )
    }
}
export default RootRouter
