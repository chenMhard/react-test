import React from 'react';
import { BrowserRouter as Router , Route , Switch , Redirect} from 'react-router-dom';

import App from './App';
import Admin from './admin';
import Home from './pages/home';
import Login from './pages/login';
import Buttons from './pages/ui/buttons';
import Modal from './pages/ui/modal';
// import NoPage from './pages/404'

export default class Routers extends React.Component{
    render(){
        return(
            <Router>
                <App>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/' render={() => 
                            <Admin>
                                <Switch>
                                    <Route exact path='/' component={Home} />
                                    <Route path='/ui/buttons' component={Buttons}/>
                                    <Route path='/ui/modals' component={Modal}/>
                                    <Redirect to="/Home" />
                                </Switch>
                            </Admin>
                        }/>   
                    </Switch>
                </App>
            </Router>
        );
    }
}