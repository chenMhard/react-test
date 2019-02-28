import React from 'C:/Users/Administrator/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';

import { Link } from '../../../node_modules/.4.3.1@react-router-dom';
export default class Nav extends React.Component{


    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/home">首页</Link>
                    </li>
                    <li>
                        <Link to='/home/about'>关于我们</Link>
                    </li>
                    <li>
                        <Link  to='/home/topics'>其他</Link>
                    </li>
                    <li>
                        <Link  to='/login'>退出登录</Link>
                    </li>
                    <li>
                        <Link  to='/info/123456'>详情</Link>
                    </li>
                </ul>
            </div>
        );
    }
}