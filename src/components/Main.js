import { Component } from 'react';
import AddItem from './AddItem';
import Home from './Home';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from './Cart';
import Orders from './Order';

class Main extends Component {
    render(){
        return (
            <div>
                <Routes>
                    <Route path='/home'>
                        <Home/>
                    </Route>
                    <Route path='/addItem'>
                        <AddItem/>
                    </Route>
                    <Route path='/cart'>
                        <Cart/>
                    </Route>
                    <Route path='/orders'>
                        <Orders/>
                    </Route>
                    <Navigate to='/home'/>
                </Routes>
            </div>
        )
    }
}

export default (connect()(Main));