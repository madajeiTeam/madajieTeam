import React,{Component}from 'react'
import {Card,Button,message} from 'antd'

class FoodAdd extends Component{
    constructor(){
        super()
        this.state=''
    }
    submit=()=>{
        let file=this.refs.file.files[0]
        console.log(file)
        let formData = new FormData()
        formData.append('hehe',file)
        this.$axios.post('/hehe/admin/file/upload',formData)
        .then((res)=>{
            console.log('resssssss',res)
        })
        // this.$axios({
        //     method: 'post',
        //     url: '/hehe/admin/file/upload',
        //     data: {img:formData}
        // }).then((data)=>{
        //     console.log('0000000000000000000000000')
        //     if(data.err === 0){
        //         message.success('添加成功！')
        //     }
        // })
    }
    render(){
        return(
            <Card title=''>
                <span>缩略图:</span>
                <input type='file' ref='file'/>
                <br/>
                <Button type='primay' onClick={this.submit}>提交</Button>
            </Card>
        )
    }
}
export default FoodAdd