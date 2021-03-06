import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import  App from  './App'
import Admin from 'pages/admin'
import Login from 'pages/login'
import TokenModel from 'components/tokenModel'

import User from 'pages/user/index'
import GoodsList from 'pages/goodsList'
import GoodsAdd from 'pages/goodsAdd'

import BannerList from 'pages/bannerList'
import BannerAdd from 'pages/bannerAdd'
import UploadBase64 from 'pages/bannerAdd/upload_base64'

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

                                    <Route path='/admin/banner/list' component={BannerList}></Route>
                                    <Route path='/admin/banner/add' component={BannerAdd}></Route>
                                    <Route path='/admin/banner/base64' component={UploadBase64}></Route>
                                    
                                    <Route path='/admin/echarts/pie' component={Pie}></Route>
                                    <Route path='/admin/user/list' component={User}></Route>

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
