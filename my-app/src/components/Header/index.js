import React from 'react';
import './index.less';
import { Row , Col } from 'antd';
import Util from '../../utils/util';
import Axios from '../../axios/axios';
export default class Header extends React.Component{
    state={
        userName:'chenM',
        time:'',
        city:'上海',
        weatherData:''
    }
    componentWillMount(){

        // 获取当前时间
        setInterval(() => {
            this.getNowTime();
        });
        // 获取天气
        this.getWeather();
    }
    getNowTime(){
        let time = new Date().getTime();
        this.setState({
            time:Util.formatDate(time)
        });
    }
    getWeather(){
        let url = 'http://api.map.baidu.com/telematics/v3/weather?location='+this.state.city+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2';
        Axios.jsonpRequest(url).then((res) => {
            console.log(res);
            this.setState({
                weatherData:res.results[0].weather_data[0],
            })
        }).catch((err) => {

        })

    }
    render(){
        return(
            <div className='header'>
                <Row className='header-top'>
                    <Col span='24'>
                        <span>欢迎 ，{this.state.userName}</span>
                        <a>退出</a>
                    </Col>
                </Row>
                <Row className='header-bot'>
                    <Col span='3' className='mianbaoxie'>
                        首页
                    </Col>
                    <Col span='21' className='weather'>
                        <time>{this.state.time}</time>
                        <span>
                            <img src={this.state.weatherData.dayPictureUrl} className='weather-pic' alt=''/>
                            {this.state.weatherData.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}