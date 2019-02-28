import React , {Component} from 'react';

import ThirdPage from '../thirdPage';
import FourthPage from '../fourthPage';

export default class SecondPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            age:12,
            name:'chenm',
            hobbies:['eat','play','sleep'],
            weather:{
                sunshine:'yes'
            }
        }
    }
    addAge(){
        this.setState({
            age:this.state.age+1
        });
        
    }
    addHobby(){
        var hobbies = this.state.hobbies;
        hobbies.push('enjoy');
        this.setState({
            hobbies:hobbies
        });
    }
    changeWeather(){
        let sunshine = 'yes';
        if(this.state.weather.sunshine === 'yes'){
            sunshine = 'no';
        }else{
            sunshine = 'yes';
        }
        let data = Object.assign(this.state.weather,{sunshine:sunshine});
        console.log(data);
        this.setState({
            weather:data
        })

    }
    render(){
        return(
            <div className="second-page">
            <span>{this.state.age}</span>
                <ThirdPage weather={this.state.weather}  age={this.state.age} name={this.state.name} hobby={this.state.hobbies}></ThirdPage>
                <hr />
                <FourthPage  
                    
                    changeWeather={this.changeWeather.bind(this)} 
                    addAge={this.addAge.bind(this)} 
                    addHobby={this.addHobby.bind(this)}>
                </FourthPage>
            </div>
        )
    }
}