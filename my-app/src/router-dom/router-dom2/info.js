import React from 'C:/Users/Administrator/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';


export default class Info extends React.Component{

  
    render(){
        return(
            <div>
                这是详情页面  id为{this.props.match.params.id}
            </div>
        );
    }
}