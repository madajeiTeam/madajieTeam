let obj = {
    data: [{
        name: '首页',
        key: 0,
        path: '/admin/home'
    },{
        name: '商品管理',
        key: 1,
        path: '/admin/goods',
        children: [
            {name: '商品列表', path: '/admin/goods/list', key: '1-0'},
            {name: '商品添加', path: '/admin/goods/add', key: '1-1'},
        ]
    },{
        name: '数据统计',
        key: 2,
        path: '/admin/echarts',
        children: [
            {name: '饼状统计', path: '/admin/echarts/pie', key: '2-0'},
            {name: '柱状统计', path: '/admin/echarts/line', key: '2-1'},
        ]
    },{
        name: '用户管理',
        key: 3,
        path: '/admin/user',
        children: [
            {name: '会员列表', path: '/admin/user/list', key: '3-0'},
        ] 
    },{
        name: '广告位管理',
        key: 4,
        path: '/admin/banner',
        children: [
            {name: '广告列表', path: '/admin/banner/list', key: '4-0'},
            {name: '广告添加', path: '/admin/banner/add', key: '4-1'},
            // {name: '文件上传_64', path: '/admin/banner/base64', key: '4-2'},
        ] 
    }]
}
export default obj