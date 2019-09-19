import React,{Component,Fragment} from 'react'
import {Card} from 'antd'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ActionCreator from '../../store/actionCreator'
import {bindActionCreators} from 'redux'
import './index.less'

class Logout extends Component{
    render(){
        return (
            <div className='logout'>
                注销
            </div>
        )
    }
}

export default Logout
