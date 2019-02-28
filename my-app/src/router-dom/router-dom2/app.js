import React from 'C:/Users/Administrator/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';


export default class App extends React.Component{



    render(){
        return(
            <div id="app">
                {this.props.children}
            </div>
        );
    }
}