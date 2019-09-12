import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import  App from  './App'
class RootRouter extends Component{
    render() {
        return(
            <App>
                <HashRouter>
                    <Switch>
                        <Route path='/mxy' render={()=>{
                            return (
                                <p>骚猫和洋洋真聪明</p>
                            )
                        }}></Route>
                    </Switch>
                </HashRouter>
            </App>
        )
    }
}
export default RootRouter
