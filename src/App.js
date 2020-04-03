import React,{Component} from 'react';
import './App.css';
//import Ronewa from './ronewa';
import Particles from 'react-particles-js';
import Nav from './components/navigation/nav'
import Signin from './components/signin/signin'
import Login from './components/login/login'
import Rank from './components/rank/rank';
import Detect from './components/search/search';

export default class App extends Component {

  constructor(){
    super();
    this.state={
      name: '',
      age: '',
      button: '',
      isSignedIn: false,
      route: 'signin'
    }
  }

  onInputChange=(event)=>{
    this.setState({name: event.target.value})
    console.log({name: event.target.value});
  }
  onNameChange=(event)=>{
    this.setState({age: event.target.value})
    console.log({age: event.target.value});
  }
  onButtonChange =()=>{
    this.setState({button: this.state.name +' '+ this.state.age});
    console.log({button: this.state.name +' '+ this.state.age});
  }
  onNavChange = (route) =>{
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({ route: route });
  }

  render(){
    const { isSignedIn, route } = this.state;
  return (
    <div className="App">
                  <Particles style={{top:0,left:0, bottom:0,right:0,position:'absolute',}}
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}/>
      <Nav isSignedIn={isSignedIn} onNavChange={this.onNavChange}/>
      { this.state.route === 'home'
      ?<div>
      <Rank />
      <Detect onInputChange={this.onInputChange} onButtonChange={this.onButtonChange}/>
      </div>
      :(
        this.state.route === 'signin'
      ?<Signin onNavChange={this.onNavChange} onInputChange={this.onInputChange} onButtonChange={this.onButtonChange} onNameChange={this.onNameChange}/>
       :<Login onNavChange={this.onNavChange}/>
      )
      }
    </div>
  );
}
}
