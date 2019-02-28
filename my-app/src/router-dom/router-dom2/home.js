import React from 'C:/Users/Administrator/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';

import Nav from './nav'
export default class Home extends React.Component{


    render(){
        return(
            <div>
                <div style={{
                    width:'40%',
                    float:"left",
                    border:'1px solid red',
                    height:'200px'
                }}>
                    <Nav></Nav>
                </div>
                <div style={{
                    width:'40%',
                    float:"left",
                    border:'1px solid yellow',
                    height:'200px'
                }}>
                    {this.props.children}
                </div>
            </div>
            
        );
    }
}