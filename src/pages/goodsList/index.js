import React,{Component} from 'react'
import {Card,Table,Button,Pagination,Spin,Popconfirm, message} from 'antd'

class Food extends Component{
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
            title: '名称',
            dataIndex: 'name',
            key: 'name',
        },{
            title: '类型',
            dataIndex: 'goodstype',
            key: 'goodstype',
        },{
            title: '图片',
            dataIndex: 'img',
            key: 'img',
            render(data){
                return(<img width='100' src={data}></img>)
            }
        },{
            title: '描述',
            dataIndex: 'desc',
            key: 'desc',
        },{
            title: '价格',
            dataIndex: 'price',
            key: 'price',
        },{
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (txt,record)=>{
                return (
                    <div>
                        <Button type='primary' size='small'>修改</Button>
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
                     url: '/hehe/admin/goods/del',
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
    pageChange=(page,pageSize)=>{
        this.setState({page: page})
        this.initData(page,this.state.pageSize)
    }
    initData=(page,pageSize)=>{
        this.setState({loading: true})
        this.$axios({method: 'post',
                     url: '/hehe/admin/goods/findByTypePage',
                     data: {page: page, pageSize: pageSize}
        }).then((data)=>{
            console.log(data)
            if(data.err === 0){
                this.setState({dataSource: data.list, total: data.total,loading: false})
            }
        })
    }
    componentDidMount(){
        let {page,pageSize} = this.state
        this.initData(page,pageSize)
    }
    render(){
        let {total,pageSize,loading} = this.state
        return (
            <Card className='food-container'>
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
export default Food