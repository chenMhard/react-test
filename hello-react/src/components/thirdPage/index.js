import React , {Component} from 'react';

export default class ThirdPage extends Component{
    
    render(){
        return(
            <div className="third-page">
                <h3>今天又阳光吗?{this.props.weather.sunshine}</h3>
                <h3>我的名字叫{this.props.name}</h3>
                <p>我今年{this.props.age}岁</p>
                <span>我的爱好是：</span>
                <ul>    
                    {this.props.hobby.map((item,index) =>{
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}