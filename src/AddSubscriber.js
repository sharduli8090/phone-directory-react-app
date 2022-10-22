import React, {Component} from 'react';
import Header from './Header';
import './common/common.css';    
import './AddSubscriber.css'

class AddSubscriber extends Component{
    render(){
        return(
            <div>
                <Header heading = "Add Subscriber"/>
                <div className='component-body-container'>
                    <button className='custom-btn'>BACK</button>
                    <form className='subscriber-form'>
                        <label htmlFor='name' className='label-control'>Name:</label>    
                        <br/> 
                        <input id='name' type="text" className='input-control' name="name" /> 
                        <br/>
                        <br/>
                        <label htmlFor='phone' className='label-control'>Phone:</label>    
                        <br/> 
                        <input id='phone' type="text" className='input-control' name="phone" />    
                        <div className='subscriber-info-container'>
                            <div className='subscriber-to-add-heading'>Subscriber to be added:</div>
                            <div className='subscriber-info'>Name:</div>
                            <div className='subscriber-info'>Phone:</div>
                        </div>
                        <button type="submit" className='custom-btn add-btn'>Add</button>
                        </form>
                </div>
            </div>
        )
    }
}
export default AddSubscriber;