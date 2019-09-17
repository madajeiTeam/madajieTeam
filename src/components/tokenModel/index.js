import React,{Component,Fragment} from 'react'
import {Card} from 'antd'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ActionCreator from '../../store/actionCreator'
import {bindActionCreators} from 'redux'
import './index.less'

class TokenModel extends Component{
    back=()=>{
        // 1.将模态框隐藏 2.路由跳转到登录界面
        // this.props.test()
        this.props.changeModelState()
        // 跳转到登录页面
        this.props.history.push('/login')
    }
    render(){
        console.log(this)
        return (
            <Fragment>
                {!this.props.modelState||<div className='tokenModel'>
                    <Card className='card'>
                        <p>token丢失，请重新登录！</p>
                        <button onClick={this.back}>返回登录</button>
                    </Card>
                </div>}
            </Fragment>
        )
    }
}
/*
export default connect(state=>state, (dispatch)=>{
    return {
        test(){
            dispatch(ActionCreator.changeModelState())
        }
    }
})(TokenModel)*/

// 连续调用2次高阶组件
let NewComponent = withRouter(TokenModel)
export default connect(state=>state, (dispatch)=>{
    return bindActionCreators(ActionCreator,dispatch)
})(NewComponent)
