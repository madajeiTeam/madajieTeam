// import Lang from '../language/languageData'
// import Store from '../../store/store'
// let type = 'ch_cn'
let obj = {
    data: [{
        name: 'home',
        key: 0,
        path: '/admin/home'
    },{
        name: 'goods',
        key: 1,
        path: '/admin/goods',
        children: [
            {name: 'goodsList', path: '/admin/goods/list', key: '1-0'},
            {name: 'goodsAdd', path: '/admin/goods/add', key: '1-1'},
        ]
    },{
        name: 'statistics',
        key: 2,
        path: '/admin/echarts',
        children: [
            {name: 'line', path: '/admin/echarts/pie', key: '2-0'},
            {name: 'pie', path: '/admin/echarts/line', key: '2-1'},
        ]
    },{
        name: 'user',
        key: 3,
        path: '/admin/user',
        children: [
            {name: 'userList', path: '/admin/user/list', key: '3-0'},
        ] 
    },{
        name: 'banner',
        key: 4,
        path: '/admin/banner',
        children: [
            {name: 'bannerList', path: '/admin/banner/list', key: '4-0'},
            {name: 'bannerAdd', path: '/admin/banner/add', key: '4-1'},
            // {name: '文件上传_64', path: '/admin/banner/base64', key: '4-2'},
        ] 
    }]
}
export default obj