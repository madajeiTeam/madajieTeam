import React,{Component} from 'react'
import {Card,Table,Button,Pagination,Spin,Popconfirm, message ,Input} from 'antd'
const { Search } = Input;
class User extends Component{
    constructor(){
        super()
        this.state = {
            dataSource: [],
            page: 1,
            pageSize: 4,
            total: 0,
            loading: true
        }
    }
    columns = [
        {
            title: '用户名字',
            dataIndex: 'name',
            key: 'name',
        },{
            title: '手机号',
            dataIndex: 'phone',
            key: 'phone',
        },{
            title: '用户密码',
            dataIndex: 'password',
            key: 'password',
        },{
            title: '用户性别',
            dataIndex: 'sex',
            key: 'sex',
        },{
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (txt,record)=>{
                return (
                    <div>
                        <Popconfirm
                            title='你确定要删除吗？'
                            onConfirm={this.confirmDel.bind(this,record._id)}
                        >
                            <Button type='danger' size='small'>删除</Button>
                        </Popconfirm>
                    </div>
                )
            }
        },
    ]
    confirmDel=(id)=>{
        let {page,pageSize} = this.state
        this.$axios({method: 'post',
                     url: '/hehe/admin/user/del',
                     data: {_id: id}
        }).then((data)=>{
            if(data.err === 0){
                message.success('删除成功！')
                this.initData(page,pageSize)
            }else{
                message.success('删除失败，请重试！')
            }
        })
    }
    searchData = (value)=> {
      this.$axios({method: 'post',
                     url: '/hehe/admin/user/findByKw',
                     data: {kw: value}
        }).then((data)=>{
            if(data.err === 0){
                message.success('查询成功')               
                this.setState({dataSource:data.list})
            }else{
                message.success('查询失败，请重试！')
            }
        })
    }
    pageChange=(page,pageSize)=>{
        this.setState({page: page})
        this.initData(page,this.state.pageSize)
    }
    initData=(page,pageSize)=>{
        this.setState({loading: true})
        this.$axios({method: 'post',
                     url: '/hehe/admin/user/findByPhone',
                     data: {page: page, pageSize: pageSize}
        }).then((data)=>{
            if(data.err === 0){
                this.setState({dataSource: data.list, total: data.total,loading: false})
            }
        })
    }
    componentDidMount(){
        let {page,pageSize} = this.state
        this.initData(page,pageSize,)
    }
    render(){
        let {total,pageSize,loading} = this.state
        return (
            <Card className='food-container'>
              <Search placeholder="模糊搜索" onSearch={value => this.searchData(value)} enterButton />
                <Spin tip='数据加载中'
                      spinning={loading}
                >
                    <Table 
                        dataSource={this.state.dataSource} 
                        columns={this.columns} 
                        scroll={{y: 350, x: 100}}
                        pagination={false}
                    />
                </Spin>
                <Pagination 
                    simple defaultCurrent={1} 
                    total={total} 
                    pageSize={pageSize}
                    onChange={this.pageChange} 
                />
            </Card>
        )
    }
}
export default User
