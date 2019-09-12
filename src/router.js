import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import  App from  './App'
import Wbr from 'pages/wbr'
class RootRouter extends Component{
    render() {
        return(
            <App>
                <HashRouter>
                    <Switch>
                    {/* <Redirect exact from = '/' to ='/wbr'> </Redirect> */}
                        <Route path="/wbr" component={Wbr}></Route>
                    </Switch>
                </HashRouter>
            </App>
        )
    }
}
export default RootRouter
