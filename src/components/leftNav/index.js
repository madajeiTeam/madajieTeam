import React,{Component} from 'react'
import {Menu,Icon} from 'antd'
import {withRouter} from 'react-router-dom'
import navData from './navData'
const {SubMenu} = Menu

class LeftNav extends Component{
    constructor(){
        super()
        this.state={
            data: []
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
        if(!arr.length) {return '暂无数据'}
        return arr.map((item,index)=>{
            if(item.children){
                return (
                    <SubMenu title={item.name} key={index}>
                        {/* 递归 */}
                        {this.renderItem(item.children)}
                    </SubMenu>
                )
            }else{
                return <Menu.Item key={item.key}
                                  onClick={this.jump.bind(this,item.path)}
                >{item.name}</Menu.Item>
            }
        })
    }
    render(){
        return (
            <Menu theme='dark' 
                  style={{ width: 230 }} 
                  mode="vertical"
            >
                {this.renderItem(navData.data)}
                {/* {data.map((item)=>{
                    if(item.children){
                        return (
                            <SubMenu key={item.key} title={item.name}>
                                {item.children.map((item)=>{
                                    return (
                                        <Menu.Item key={item.key}
                                                   onClick={this.jump.bind(this,item.path)}
                                        >{item.name}</Menu.Item>
                                    )
                                })}
                            </SubMenu>
                        )
                    }else{
                        return (
                            <Menu.Item key={item.key}
                                       onClick={this.jump.bind(this,item.path)}
                            >{item.name}</Menu.Item>
                        )
                    }
                })} */}
            </Menu>
        )
    }
}
export default withRouter(LeftNav)