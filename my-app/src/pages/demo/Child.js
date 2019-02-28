import React from 'react'


export default class Child extends React.Component{
    constructor(props){
        console.log(props)
        super(props);
        this.state={
            count:0
        }
    }

    componentWillMount(){
        console.log('will mount');
    }
    componentDidMount(){
        console.log('did mount');
    }
    componentWillReceiveProps(newPorps){
        console.log('will props'+newPorps.name);
    }
    shouldComponentUpdate(){
        console.log('Update');
        
        return true;
    }
    componentWillUpdate(){
        console.log('will Update');
    }
    componentDidUpdate(){
        console.log('did Update');

    }
    render(){
        return <div>
                <p>这里是在测试子组件的生命周期</p>
                <p>{this.props.name}</p>
            </div>
    }
}