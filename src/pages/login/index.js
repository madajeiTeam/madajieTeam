import React,{Component} from 'react'
import {Form, Icon, Input, Button, Card, message} from 'antd';
import './index.less'

class Login extends Component{
    login=()=>{
        let result = this.props.form.getFieldsValue()
        this.props.form.validateFields((err,data)=>{
            if(err){
                // 前端验证有错误
                message.error('输入信息有误，请重试！',1)
            }else{
                // 前端验证成功，调用ajax接口
                this.$axios({method: 'post', 
                             url: '/hehe/admin/user/login',
                             data: {us: data.us, ps: data.ps}
                            })
                .then((data)=>{
                    console.log(data)
                    if(data.err === 0){
                        localStorage.setItem('token',data.token)
                        message.success('登陆成功！1s后跳转至首页',1,()=>{
                            this.props.history.push('/admin/home')
                        })
                    }else{
                        message.error(data.msg)
                    }
                })
            }
        })
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        return (
            <div className='login'>
            <Card>
                <Form.Item>
                    {getFieldDecorator('us',{
                        rules: [{required: true, message: '用户名不能为空！'},
                                {max: 15, message: '最长15个字符'},
                                {min: 6, message: '最少6个字符'}
                        ]
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               placeholder="Username"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('ps',{})(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               placeholder="Password"/>
                    )}
                </Form.Item>
                <Form.Item>
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <Button type="primary" 
                            onClick={this.login}
                            htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Card>
            </div>
        )
    }
}
export default Form.create()(Login)