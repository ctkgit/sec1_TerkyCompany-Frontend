import React from 'react';
import "./UserItem.css";
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

class UserItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            username: this.props.user.username,
            role: this.props.user.role,
            isBanned: this.props.user.isBanned
        }
    }

    componentDidMount() {
        // console.log("Get role,isbanned from backend");
        
    }

    handleEdit = () => {
        window.location.assign('/management/user/'+this.state.username+'/edit');
        
    }

    handleDelete = () => {
        // console.log("del "+this.state.username);
        Axios.delete(`${process.env.REACT_APP_URL}/members-t/${this.state.username}/delete`).then(window.location.reload())
        
    }

    handleBan = () => {
        // console.log("ban "+this.state.username)
        let sendData = {
            "username": this.state.username,
            "isSuspended" : "1"
        }
        Axios.put(`${process.env.REACT_APP_URL}/members-t/${this.state.username}/update`,sendData).then(res => {
            // console.log(res.data)
            window.location.reload()
        })
    }

    handleUnban = () => {
        // console.log("unban "+this.state.username)
        let sendData = {
            "username": this.state.username,
            "isSuspended" : "0"
        }
        Axios.put(`${process.env.REACT_APP_URL}/members-t/${this.state.username}/update`,sendData).then(res => {
            // console.log(res.data)
            window.location.reload()
        })
        this.forceUpdate()
    }

    render() {
        if (this.state.isLoading) return null
        // console.log(this.state.isBanned);
        
        return(
            <div className="user-item" >
                <h5>{this.state.username}
                    <p className="in-h5">{this.state.role}</p>
                </h5>
                <div>
                    <Button variant="primary" className="user-button" onClick={() => this.handleEdit()}>Edit</Button>
                    <Button variant="danger" className="user-button" onClick={() => this.handleDelete()}>Delete</Button>
                    {!this.state.isBanned && <Button variant="warning" className="user-button" onClick={() => this.handleBan()}>Ban</Button>}
                    {this.state.isBanned && <Button variant="info" className="user-button" onClick={() => this.handleUnban()}>Unban</Button>}
                </div>
                
            </div>
        );
    }
}

export default UserItem;
