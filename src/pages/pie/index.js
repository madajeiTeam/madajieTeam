import React, { Component} from 'react';
import { Card } from 'antd'
import Echarts from  'echarts'
import ReactEcharts from 'echarts-for-react';

class Pie extends Component {
  constructor(){
    super()
    this.state = {
      option: {
        series : [
          {
              name:'访问来源',
              type:'pie',
              radius : '55%',
              center: ['50%', '50%'],
              data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:274, name:'联盟广告'},
                  {value:235, name:'视频广告'},
                  {value:400, name:'搜索引擎'}
              ].sort(function (a, b) { return a.value - b.value; }),
              roseType: 'radius',
          }
        ]
      }
    }
  }
  render(){
    return (
      <Card title='饼状图'>
        <ReactEcharts option={this.state.option}></ReactEcharts>
        {/* <button onClick={this.updata}>跟新数据</button> */}
      </Card>
    )
  }
}

export default Pie;
