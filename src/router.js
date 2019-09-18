import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import  App from  './App'
import Admin from 'pages/admin'
import Login from 'pages/login'
import TokenModel from 'components/tokenModel'

import GoodsList from 'pages/goodsList'
import GoodsAdd from 'pages/goodsAdd'
import Pie from 'pages/pie';


class RootRouter extends Component{
    render() {
        return(
            <App>
                <HashRouter>
                    <TokenModel></TokenModel>
                    <Switch>
                        <Redirect exact from='/' to='/admin'></Redirect>
                        <Route path='/admin' render={()=>{
                            return (
                                <Admin>
                                    <Route path='/admin/goods/list' component={GoodsList}></Route>
                                    <Route path='/admin/goods/add' component={GoodsAdd}></Route>
                                    <Route path='/admin/echarts/pie' component={Pie}></Route>
                                </Admin>
                            )
                        }}></Route>
                        <Route path='/login' component={Login}></Route>
                    </Switch>
                </HashRouter>
            </App>
        )
    }
}
export default RootRouter
