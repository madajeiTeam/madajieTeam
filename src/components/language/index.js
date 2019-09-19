import React,{Component,Fragment} from 'react'
import {Card} from 'antd'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ActionCreator from '../../store/actionCreator'
import {bindActionCreators} from 'redux'
import './index.less'
import Store from '../../store/store'


class Language extends Component{
    constructor(){
        super()
        this.state={
            list:['简体中文','繁體中文','English'],
            language:['ch_cn','ch_hk','en']
        }
    }
    change(index){
        let type = this.state.language[index]
        Store.dispatch(ActionCreator.changeLanguageState(type))
    }
    render(){
        return (
            <div className='language'>
                <ul>
                    {this.state.list.map((item,index)=>{
                        return(<li onClick={this.change.bind(this,index)} key={index}>{item}</li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default Language
