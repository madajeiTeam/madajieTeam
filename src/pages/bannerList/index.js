import React,{Component} from 'react'
import {Card,Table,Button,Pagination,Spin,Popconfirm, message} from 'antd'
import BannerUpdate from 'pages/bannerUpdate'

class BannerList extends Component{
    constructor(){
        super()
        this.state = {
            dataSource: [],
            page: 1,
            pageSize: 5,
            total: 0,
            loading: true,
            updateShow:false,
            record:{}
        }
    }
    columns = [
        {
            title: '坐标',
            dataIndex: 'coordinate',
            key: 'coordinate',
        },{
            title: '价格',
            dataIndex: 'price',
            key: 'price',
        },{
            title: '图片',
            dataIndex: 'img',
            key: 'img',
            render(data){
                console.log('sdadsadsadsa',data)
                return(<img width='100' src={data}></img>)
            }
        },{
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (txt,record)=>{
                return (
                    <div>
                        <Button type='primary' size='small'
                            onClick={this.update.bind(this,record)}
                        >
                            修改
                        </Button>
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
    update=(record)=>{
        console.log('gengxin ',record)
        this.setState({updateShow:!this.state.updateShow,record:record})
    }
    confirmDel=(id)=>{
        let {page,pageSize} = this.state
        this.$axios({method: 'post',
                     url: '/hehe/admin/banner/del',
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
                     url: '/hehe/admin/banner/findByTypePage',
                     data: {page: page, pageSize: pageSize}
        }).then((data)=>{
            console.log(data)
            if(data.err === 0){
                console.log('判断xxxxxxx',data)
                this.setState({dataSource: data.list, total: data.total,loading: false})
            }
        })
    }
    componentDidMount(){
        let {page,pageSize} = this.state
        this.initData(page,pageSize)
    }
    refresh=()=>{
        this.setState({updateShow:false})
        this.initData(this.state.page,this.state.pageSize)
    }
    render(){
        let {total,pageSize,loading,updateShow,record} = this.state
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
                {!updateShow||<BannerUpdate record={record} refreshfun={this.refresh}></BannerUpdate>}
            </Card>
        )
    }
}
export default BannerList
