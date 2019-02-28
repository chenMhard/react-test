import React from 'C:/Users/Administrator/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';

import {HashRouter , Link , Route  ,Switch} from '../../../node_modules/.4.3.1@react-router-dom';

import Home from './home'
import About from './about'
export default class Topics extends React.Component{


    render(){
        
        return(
           
            <div>
                this is topics page;
                <HashRouter>
                    <div>
                        <Link to='/topics/a'>a路由</Link>
                        <Link to='/topics/b'>b路由</Link>
                        <div style={{background:"red",marginLeft:"50px",}}>
                            <Route path='/topics/a' component={Home}></Route>
                            <Route path='/topics/b' component={About}></Route>
                        </div>
                    </div>
                </HashRouter>

            </div>
        );
    }
}