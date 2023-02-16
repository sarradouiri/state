import React, { Component } from 'react';

class Profile extends Component {
    constructor(props)
    {
        super(props);
        this.state=
        {
        counter:0,
        }
        
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({counter:this.state.counter+1})
        }, 1000);
    }
    render() {
        return (
            <div>
                 <img src={this.props.image}/>
             <p>{ this.props.name}</p> 
             <p>{ this.props.age}</p> 
             <p> { this.props.proffession}</p> 
             <p> { this.props.bio}</p> 
            {this.state.counter}
            </div>
        );
    }
}

export default Profile;
