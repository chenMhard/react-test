import React , {Component} from 'react';
import './index.less';
import {Icon} from 'antd';
import { formatDate } from '../../utils/util'
export default class Header extends Component{
    constructor(){
        super();
        this.state = {
            date:'',
        }
        
        setInterval(() => {
            let t = new Date().getTime();
            this.setState({
                date:formatDate(1,t)
            });
        });

    }
    render(){
        return(
            <div className="header">
                <div className="header-top">
                    <span className="user-name">
                        <Icon type="user" />
                        <em>admin</em>
                        <Icon type="caret-down" />
                    </span>
                </div>
                <div className="nav-place">
                    <div>
                        <span>
                            页面1
                        </span>
                        <em>
                            {this.state.date}
                        </em>
                    </div>
                </div>
            </div>
        )
    }
}