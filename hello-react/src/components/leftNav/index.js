import React , {Component} from 'react';

export default class LeftNav extends Component{
    render(){
        return(
            <div className="left-nav">
                <div className="logo">
                    <img src={require('../../assets/img/react.png')} alt="logo"/> 
                </div>
                <div className="nav-content">
                    <ul>
                        <li>
                            导航1
                        </li>
                        <li>
                            导航2
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}