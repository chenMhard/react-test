import React from 'react';

import { Link } from 'react-router-dom';
import MenuConfig from '../../config/menuConfig.js';
import { Menu } from 'antd';
import './index.less';
const SubMenu = Menu.SubMenu;



export default class NavLeft extends React.Component{
    state={
        menuContent:[]
    }
    componentWillMount(){
        console.log(this.renderMenu(MenuConfig))
        this.setState({
            menuContent:this.renderMenu(MenuConfig),
        });
        console.log(this.state.menuContent)
    }
    // 渲染菜单
    renderMenu = (data) => {
        return data.map((item) => {
            if(item.children){
                return <SubMenu title={item.title} key={item.title}>
                    {this.renderMenu(item.children)}
                </SubMenu>
            }
            return <Menu.Item key={item.key}><Link to={item.key}>{item.title}</Link></Menu.Item>
        })
    }
    render(){
        return(
            <div id="left-nav">
                <div className='logo'>
                    <img src='assets/logo-ant.svg' alt=''/>
                    <span>Antd Design</span>
                </div>
                <div className='left-nav'>
                    <Menu 
                        theme='dark' 
                    >
                        {this.state.menuContent}
                    </Menu>
                </div>
            </div>
        )
    }
}