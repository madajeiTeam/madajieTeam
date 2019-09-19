import React,{Component} from 'react'
import './index.less'
import LeftNav from 'components/leftNav'
import Logout from 'components/logout'
import Language from 'components/language'

class Admin extends Component{
    render(){
        return (
            <div className='admin'>
                <div className='admin-left'>
                    <LeftNav></LeftNav>
                </div>
                <div className='admin-right'>
                    <div className='admin-right-header'>
                        <Language></Language>
                        <Logout></Logout>
                    </div>
                    <div className='admin-right-center'>
                        {this.props.children}
                    </div>
                    <div className='admin-right-footer'></div>
                </div>
            </div>
        )
    }
}
export default Admin