import React,{Component} from 'react'
import {Card,Table,Button,Pagination,Spin,Popconfirm, message} from 'antd'
import './index.less'

class GoodsUpdate extends Component{
    constructor(props){
        super(props)
        this.state = props.record
    }
    submit=()=>{
        let {_id,name,price,detail,img,title,desc,goodstype} = this.state
        this.$axios.post('/hehe/admin/goods/update',{_id,name,price,detail,img,title,desc,goodstype})
        .then((data)=>{
            this.props.refreshFun()
        })
    }
    upload=()=>{
        let img = this.refs.img.files[0]
        let formdata = new FormData()
        formdata.append('img',img)
        this.$axios.post('/hehe/admin/file/upload',formdata)
        .then((data)=>{
            if(data.err === 0){
                this.setState({img: data.imgpath})
            }
        })
    }
    render(){
        let {name,price,detail,img,title,desc,goodstype} = this.state
        return (
            <div className='updateModel'>
                <Card className='card'>
                    <span>名称：</span><input type='text' value={name} onChange={(e)=>{
                        this.setState({name: e.target.value})
                    }}/>
                    <span>标题：</span><input type='text' value={title} onChange={(e)=>{
                        this.setState({title: e.target.value})
                    }}/>
                    <span>详情：</span><input type='text' value={detail} onChange={(e)=>{
                        this.setState({detail: e.target.value})
                    }}/>
                    <span>价格：</span><input type='text' value={price} onChange={(e)=>{
                        this.setState({price: e.target.value})
                    }}/>
                    <span>简介：</span><input type='text' value={desc} onChange={(e)=>{
                        this.setState({desc: e.target.value})
                    }}/>
                    <span>类型：</span><select value={goodstype} onChange={(e)=>{
                        this.setState({goodstype: e.target.value})
                    }}>
                        <option value='卷饼'>卷饼</option>
                        <option value='热菜'>热菜</option>
                        <option value='凉菜'>凉菜</option>
                        <option value='辣菜'>辣菜</option>
                    </select>
                    <img src={img} alt=''/>
                    <input type='file' ref='img'/>
                    <button onClick={this.upload}>上传</button>
                    <br/>
                    <button onClick={this.submit}>修改</button>
                </Card>
            </div>
        )
    }
}
export default GoodsUpdate

/* 
功能：
1.是一个模态框
2.显示默认内容
3.修改内容
4.点击提交，关闭模态框，刷新原始页面
*/