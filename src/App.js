import {type} from '@testing-library/user-event/dist/type';
import React, {Component} from 'react';
import Header from './Header.js';
import './App.css';


class App extends Component {

    render() {

        let subscribers = [
            {
                id: 1,
                name: "Shardu",
                phone: "8888888888"
            }, {
                id: 2,
                name: "Chinu",
                phone: "99999999999"
            }
        ]

        return (
            <div>
                <Header/>
                <button id="AddBtn">Add</button>
                <div className="btnFlex">
                    <span className='headText'>
                        Name</span>
                    <span className='headText'>Phone</span>

                </div>
                {
                subscribers.map(sub => {
                    return <div key={
                            sub.id
                        }
                        className="btnFlex">
                        <span className='bodyText'>{sub.name}</span>
                        <span className='bodyText'>{sub.phone}</span>
                    </div>
            })
            } </div>

        );
    }
}


export default App;
