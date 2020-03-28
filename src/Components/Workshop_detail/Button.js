import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    render() {
        if(this.props.role == 'owner') {
            return(
                <button className='button' onClick={() => {
                    window.location.assign('/workshopeditor/'+this.props.username+'/1')
                } } >Edit</button>
            );
        }
        else {
            return(
                <button className='button' onClick={() => {
                    if(this.props.role == '')
                    {
                        alert('Please login first')
                        window.location.assign('/login')
                    }
                    else if(this.props.role == 'participant') {
                        alert('Joined!!!')
                    }
                    else {
                        alert('Your role is workshop-owner. You cannot join any workshop!')
                    }
                } } >Join</button>
            );
        }
        
    }
}

export default Button;