import React,{Component} from 'react'
import './index.less'
import { Card, Button, message } from 'antd';

class FoodAdd extends Component{
    constructor(){
        super()
        this.state = {name:'', price:'', img:'', desc:'', goodsType:'热菜', title:'', detail:''}
    }
    upload=()=>{
        let file = this.refs.file.files[0]
        var r = new FileReader()
        r.onload=()=>{
            this.setState({img: r.result})
        }
        r.readAsDataURL(file)
    }
    submit=()=>{
        let {name,price,img,desc,goodsType,title,detail} = this.state
        if(img !== ''){
            this.$axios({
                method: 'post',
                url: '/hehe/admin/goods/add',
                data: {name:name, price:price, img:img, desc:desc, goodstype:goodsType, title:title, detail:detail}
            }).then((data)=>{
                console.log(data)
                if(data.err === 0){
                    message.success('添加成功！')
                }
            })
        }else{
            message.error('请先上传图片')
        }
    }
    render(){
        let {name,price,img,desc,goodsType,title,detail} = this.state
        return (
            <Card title='商品添加'>
                <span>名称：</span><input className='foodadd-input' type='text' value={name} onChange={(e)=>{
                    this.setState({name: e.target.value})
                }}/>
                <span>标题：</span><input className='foodadd-input' type='text' value={title} onChange={(e)=>{
                    this.setState({title: e.target.value})
                }}/>
                <span>详情：</span><input className='foodadd-input' type='text' value={detail} onChange={(e)=>{
                    this.setState({detail: e.target.value})
                }}/>
                <span>价格：</span><input className='foodadd-input' type='text' value={price} onChange={(e)=>{
                    this.setState({price: e.target.value})
                }}/>
                <span>缩略图：</span><input className='foodadd-input' type='file' ref='file' />
                <Button onClick={this.upload}>上传</Button>
                <img src={img} width='80' height='80' alt=''/>
                <span>简介：</span><input className='foodadd-input' type='text' value={desc} onChange={(e)=>{
                    this.setState({desc: e.target.value})
                }}/>
                <span>类型：</span>
                <select value={goodsType} onChange={(e)=>{
                    this.setState({goodsType: e.target.value})
                }}>
                    <option value='热菜'>热菜</option>
                    <option value='凉菜'>凉菜</option>
                    <option value='辣菜'>辣菜</option>
                    <option value='卷饼'>卷饼</option>
                </select>
                <Button className='foodadd-btn' onClick={this.submit}>提交</Button>
            </Card>
        )
    }
}
export default FoodAdd