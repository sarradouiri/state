import React, { Component } from 'react';
import img from './assets/photo.jpg';
import Profile from './Profile';


class App extends Component {
  constructor(props){
  super(props);
 this.state={
  person :{
    fullname : "sarra douiri",
    age: 29,
    proffession:"webdesigner",
    bio : "lorempisumlorempisumlorempisumlorempisumlorempisumlorempisumlorempisum",
    image: img,

  },
  show:false,
 }
}
  render() {
    return (
      <div>
     
{this.state.show?(<div><Profile name={this.state.person.fullname} 
age={this.state.person.age}proffession={this.state.person.proffession} bio={this.state.person.bio}image={this.state.person.image}/>
</div>):null}
<button onClick={()=>this.setState({show:!this.state.show})}>click ici</button>
      </div>
    );
  }
}

export default App;
