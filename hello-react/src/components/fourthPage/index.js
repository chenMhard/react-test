import React , {Component} from 'react';
import { Button } from 'antd';
export default class FourthPage extends Component{

    render(){
        return(
            <div className="fourth-page">
                <Button type="primary" onClick={this.props.addAge}>加一岁</Button>
                <Button type="primary" onClick={this.props.addHobby}>加个爱好</Button>
                <Button type="primary" onClick={this.props.changeWeather}>改变天气</Button>
            </div>
        )
    }
}