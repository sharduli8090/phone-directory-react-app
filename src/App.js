import React, {Component} from 'react';
import Header from './Header.js';
import './App.css';


class App extends Component {

    constructor(){
        super();
        this.state = {
            subscribersListToShow: []
        }
    }
    render() {
        return (
            <div>
                <Header heading="Phone Directory"/>
                
            <button id="AddBtn">Add</button>
            <div className="textFlex">
                <div className='headText'>
                    Name
                </div>
                <div className='headText'>Phone</div>

            </div>
            {
            this.state.subscribersListToShow.map(sub => {
                return <div key={
                        sub.id
                    }
                    className="textFlex">
                    <span className='bodyText'>
                        {
                        sub.name
                    }</span>
                    <span className='bodyText'>
                        {
                        sub.phone
                    }</span>
                    <button id="delBtn">Delete</button>
                </div>
        })
        } 
            </div>

        );
    }
}


export default App;
