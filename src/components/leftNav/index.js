import React,{Component} from 'react'
import {Menu,Icon} from 'antd'
import {withRouter} from 'react-router-dom'
import navData from './navData'
import Lang from '../language/languageData'
import Store from '../../store/store'
import Style from './index.module.less'

const {SubMenu} = Menu


class LeftNav extends Component{
    constructor(){
        super()
        this.state={
            data: [],
    
        }
    }
    componentDidMount(){
        // 模拟ajax请求
        setTimeout(()=>{
            this.setState({data: navData.data})
        },200)
    }
    jump=(path)=>{
        this.props.history.push(path)
    }
    renderItem(arr){
        let {langType}=Store.getState()
        if(!arr.length) {return '暂无数据'}
        return arr.map((item,index)=>{
            if(item.children){
                return (
                    <SubMenu title={Lang[langType][item.name]} key={index}>
                        {/* 递归 */}
                        {this.renderItem(item.children)}
                    </SubMenu>
                )
            }else{
                return (<Menu.Item key={item.key}
                                  onClick={this.jump.bind(this,item.path)}
                >{Lang[langType][item.name]}</Menu.Item>)
            }
        })
    }

    componentDidMount(){
        Store.subscribe(()=>{
            this.setState({})
        })
    }
    render(){
        return (
            <div class={Style.leftNav}>
                <Menu theme='dark' 
                    style={{ width: 230 }} 
                    mode="vertical"
                >
                    {this.renderItem(navData.data)}
                </Menu>
            </div>
        )
    }
}
export default withRouter(LeftNav)