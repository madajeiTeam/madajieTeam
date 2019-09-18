import React,{Component} from 'react'
import './index.less'
import { Card, Button, message } from 'antd';

class BannerAdd extends Component{
    constructor(props){
        super(props)
        this.state = props.record
    }
    submit=()=>{
        let {_id,price,img,coordinate} = this.state
        console.log('_id',_id)
        this.$axios({method: 'post',
                     url: '/hehe/admin/banner/update',
                     data: ({_id:_id,img:666,price: price,coordinate:coordinate})
        }).then((data)=>{
            console.log(data)
            if(data.err === 0){
                console.log('判断',data)
                this.setState({dataSource: data.list, total: data.total,loading: false})
            }
        })
        this.props.refreshfun()
    }
    render(){
        let {img,price,coordinate} = this.state
        console.log(img)
        return (
           <div className='updateModel'>
               <Card className='card'>
                <span>价格：</span><input className='foodadd-input' type='text' value={price} onChange={(e)=>{
                        this.setState({price: e.target.value})
                    }}/>
                    {/* <span>缩略图：</span><input className='foodadd-input' type='file' value={img} 
                    onChange={(e)=>{
                        this.setState({img:e.target.value})
                    }}/> */}
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
                    <br></br>
                   <Button onClick={this.submit}>修改</Button>
               </Card>
           </div> 
        )
    }
}
export default BannerAdd