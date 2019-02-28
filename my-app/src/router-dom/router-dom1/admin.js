import React from 'C:/Users/Administrator/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';

import {HashRouter , Link , Route  ,Switch} from '../../../node_modules/.4.3.1@react-router-dom';
import Topics from './topics';
import Home from './home'
import About from './about'


export default class Admin extends React.Component{


    render(){
        return(
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>
                    <Route exact={true} path='/' component={Home}></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/topics' component={Topics}></Route>
                </div>
            </HashRouter>
        );
    }
}