import React, {Component} from 'react';
import Header from './Header';
import './common/common.css';    
import './AddSubscriber.css'

class AddSubscriber extends Component{

    constructor(){
        super();
        this.state = {
            id:0,
            name:'',
            phone:''
        }
    }
    inputChangenHandler = (e) =>{
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(state);
    }
    render(){
        const {name,phone} = this.state;
        return(
            <div>
                <Header heading = "Add Subscriber"/>
                <div className='component-body-container'>
                    <button className='custom-btn'>BACK</button>
                    <form className='subscriber-form'>
                        <label htmlFor='name' className='label-control'>Name:</label>    
                        <br/> 
                        <input id='name' type="text" className='input-control' name="name" onChange={this.inputChangenHandler}/> 
                        <br/>
                        <br/>
                        <label htmlFor='phone' className='label-control'>Phone:</label>    
                        <br/> 
                        <input id='phone' type="text" className='input-control' name="phone" onChange={this.inputChangenHandler} />    
                        <div className='subscriber-info-container'>
                            <div className='subscriber-to-add-heading'>Subscriber to be added:</div>
                            <div className='subscriber-info'>Name: {name}</div>
                            <div className='subscriber-info'>Phone: {phone}</div>
                        </div>
                        <button type="submit" className='custom-btn add-btn'>Add</button>
                        </form>
                </div>
            </div>
        )
    }
}
export default AddSubscriber;