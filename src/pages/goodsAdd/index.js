import React,{Component} from 'react'
import './index.less'
import { Card, Button, message } from 'antd';

class FoodAdd extends Component{
    constructor(){
        super()
        this.state = {name:'', price:'', img:'', desc:'', foodType:'热菜'}
    }
    submit=()=>{
        let {name,price,img,desc,foodType} = this.state
        console.log(111)
        this.$axios({
            method: 'post',
            url: '/hehe/admin/food/add',
            data: {name:name, price:price, img:123, desc:desc, foodtype:foodType}
        }).then((data)=>{
            console.log(data)
            if(data.err === 0){
                message.success('添加成功！')
            }
        })
    }
    render(){
        let {name,price,img,desc,foodType} = this.state
        return (
            <Card title='商品添加'>
                <span>名称：</span><input className='foodadd-input' type='text' value={name} onChange={(e)=>{
                    this.setState({name: e.target.value})
                }}/>
                <span>价格：</span><input className='foodadd-input' type='text' value={price} onChange={(e)=>{
                    this.setState({price: e.target.value})
                }}/>
                <span>缩略图：</span><input className='foodadd-input' type='file' />
                <span>描述：</span><input className='foodadd-input' type='text' value={desc} onChange={(e)=>{
                    this.setState({desc: e.target.value})
                }}/>
                <span>类型：</span>
                <select value={foodType} onChange={(e)=>{
                    this.setState({foodType: e.target.value})
                }}>
                    <option>热菜</option>
                    <option>凉菜</option>
                    <option>辣菜</option>
                    <option>卷饼</option>
                </select>
                <Button className='foodadd-btn' onClick={this.submit}>提交</Button>
            </Card>
        )
    }
}
export default FoodAdd