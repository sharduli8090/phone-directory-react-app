import {type} from '@testing-library/user-event/dist/type';
import React, {Component} from 'react';
import Header from './Header.js';
import DataNumber from './DataNumber.js';
import './App.css';


class App extends Component {

    render() {

   
        return (
            <div>
                <Header/>
                <DataNumber/>
                 </div>

        );
    }
}


export default App;
