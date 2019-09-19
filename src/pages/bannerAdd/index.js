import React,{Component} from 'react'
import './index.less'
import { Card, Button, message } from 'antd';

class BannerAdd extends Component{
    constructor(){
        super()
        this.state = {coordinate:'C位', price:'', img:''}
    }
    upload=()=>{
        let file = this.refs.file.files[0]
        var r = new FileReader()
        r.onload=()=>{
            this.setState({img:r.result})
        }
        r.readAsDataURL(file)
    }
    submit=()=>{
        let {coordinate,price,img} = this.state
        
        if(img == ''){
            message.error('请先上传图片')
        }else{
                this.$axios({
                method: 'post',
                url: '/hehe/admin/banner/add',
                data: {price:price, img:img, coordinate:coordinate}
            }).then((data)=>{
                console.log(data)
                if(data.err === 0){
                    message.success('添加成功！')
                }
            })
        }
        
    }
    render(){
        let {coordinate,price,img} = this.state
        return (
            <Card title='商品添加'>
                
                <span>价格：</span><input className='foodadd-input' type='text' value={price} onChange={(e)=>{
                    this.setState({price: e.target.value})
                }}/>
                <span>缩略图：</span><input className='foodadd-input' type='file' ref='file' />
                <Button onClick={this.upload}>上传</Button>
                <img src={img} width='80' height='80' alt=''/>
                <br/>
                <span>位置：</span>
                <select value={coordinate} onChange={(e)=>{
                    this.setState({coordinate: e.target.value})
                }}>
                    <option>左上</option>
                    <option>右上</option>
                    <option>左下</option>
                    <option>右下</option>
                    <option>左中</option>
                    <option>右中</option>
                    <option>C位</option>
                </select>
                <Button className='foodadd-btn' onClick={this.submit}>提交</Button>
            </Card>
        )
    }
}
export default BannerAdd