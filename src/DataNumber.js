import React from 'react';
import './DataNumber.css';
let subscribers = [
    {
        id: 1,
        name: "John",
        phone: "8888888888"
    }, {
        id: 2,
        name: "Maria",
        phone: "99999999999"
    }
]

const DataNumber = function () {
    return (
        <>
            <button id="AddBtn">Add</button>
            <div className="textFlex">
                <div className='headText'>
                    Name
                </div>
                <div className='headText'>Phone</div>

            </div>
            {
            subscribers.map(sub => {
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
        } </>
    )
}

export default DataNumber;
