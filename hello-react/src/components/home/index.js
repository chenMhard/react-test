import React , {Component} from 'react';

import Header from '../header';
import LeftNav from '../leftNav';
//import FirstPage from '../firstPage';
import SecondPage from '../secondPage';
import './index.css'
export default class Home extends Component{
    render(){
        return(
            <div className="container">
                <div className="leftNav-content">
                    <LeftNav></LeftNav>
                </div>
                <div className="main-content">
                    <div className="header-content">
                        <Header></Header>
                    </div>
                    <div className="page-content">
                        <SecondPage></SecondPage>
                    </div>
                </div>
            </div>
        )
    }
} 