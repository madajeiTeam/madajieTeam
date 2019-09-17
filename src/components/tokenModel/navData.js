let obj = {
    data: [{
        name: '首页',
        key: 0,
        path: '/admin/home'
    },{
        name: '商品管理',
        key: 1,
        path: '/admin/food'
        // children: [
        //     {name: '商品列表', path: '/admin/food/list', key: '1-0'},
        //     {name: '商品添加', path: '/admin/food/add', key: '1-1'},
        // ]
    },{
        name: '数据统计',
        key: 2,
        path: '/admin/echarts',
        children: [
            {name: '饼状统计', path: '/admin/echarts/pie', key: '2-0'},
            {name: '柱状统计', path: '/admin/echarts/line', key: '2-1'},
        ]
    }]
}
export default obj