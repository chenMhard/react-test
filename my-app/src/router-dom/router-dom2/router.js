import React from 'C:/Users/Administrator/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';

import {BrowserRouter , Link , Route  ,Switch} from '../../../node_modules/.4.3.1@react-router-dom';
import Home from './home';
import App from './app';
import Topics from './topics';
import Main from './main'
import About from './about'
import Login from './login'
import Info from './info'

export default class Admin extends React.Component{


    render(){
        return(
            <BrowserRouter>
                <App>
                    <Route   path='/home' render={()=>
                        <Home>
                            <Route exact path='/home' component={Main}></Route>
                            <Route path='/home/about' component={About}></Route>
                            <Route path='/home/topics' component={Topics}></Route>
                        </Home>
                    }></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/info/:id' component={Info}></Route>
                </App>
            </BrowserRouter>
        );
    }
}