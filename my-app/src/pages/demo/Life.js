import React from 'react'
import Child from './Child'
import './index.less'
import {Button} from 'antd'

export default class Life extends React.Component{

    // constructor(props){
    //     super(props);
        
    // }

    state = {
        count:0
    }
    handleAdd=()=>{
        this.setState({
            count:this.state.count+1
        });
    }
    handleClick(){
        this.setState({
            count:this.state.count+1
        });
    }
    render(){
       
        return <div className="content">
            <p>React 生命周期</p>
            <Button type="primary" onClick = {this.handleAdd}>Primary</Button>
            <button onClick = {this.handleAdd}>点击一下</button>
            <button onClick = {this.handleClick.bind(this)}>点击一下</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>

    }

}