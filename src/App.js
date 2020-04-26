import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import axios from 'axios';
import Nav from './components/navigation/nav'
import Signin from './components/signin/signin'
import Login from './components/login/login'
import Rank from './components/rank/rank';
import Detect from './components/search/search';
import FaceDetect from './components/facedetect/facedetect';
import './App.css';


const app = new Clarifai.App({
  apiKey: '55688264693846d4ad0c875ecbfd744d'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

export default class App extends Component {

  constructor(){
    super();
    this.state={
      name: '',
      password: '',
      imageChange: '',
      button: '',
      imageUrl: '',
          box: {},
      isSignedIn: false,
      route: 'signin',
      username: '',
      users: ''
    }
  }
/**
 * ! Calculation
 *  */
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  onInputChange=(event)=>{
    this.setState({name: event.target.value})
    //console.log({name: event.target.value});
  }
  onNameChange=(event)=>{
    this.setState({password: event.target.value})
    //console.log({password: event.target.value});
  }
  onImageChange =(event)=>{
    this.setState({imageChange: event.target.value})
  } 
  onImageButtonClick = (event)=>{
    console.log(this.state.imageChange)

    this.setState({imageUrl: this.state.imageChange})
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.imageChange)
    .then(response => {
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
      /*if (response) {
        fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count}))
          })

      }*/
      
    .catch(err => console.log(err));
  }
  onUserChange =()=>{
    axios.get('http://localhost:3001')
      .then(response=>{
      if(response.data.length>0){
        const me = response.data.map((user, i)=>{
          return response.data[i].name
        })
        this.setState({
          users: response.data.map(user=>user.name),
          username: me
        })
        console.log(this.state.username)
        console.log(this.state.users)
        }
      })
      
  }
  onButtonChange =(event)=>{
    event.preventDefault();
    const users = {
      name: this.state.name,
      password: this.state.password
    }
    console.log(users);
      axios.post('http://localhost:3001/add', users)
      .then(res=>console.log(res.data))
      
    this.setState({
      name: ' ',
      password: ' '
    })

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
    const { isSignedIn, imageUrl, route, box } = this.state;
  return (
    <div className="App">
        <Particles className='particles'
          particles ={particlesOptions}
        />
          <Nav isSignedIn={isSignedIn} onNavChange={this.onNavChange}/>
            { this.state.route === 'home'
              ? <div>
                  <Rank />
                  <Detect onImageChange={this.onImageChange} onImageButtonClick={this.onImageButtonClick}/>
                  <FaceDetect box={box} imageUrl={this.state.imageUrl}/>
                </div>
              :(
                this.state.route === 'signin'
                  ?<Signin onNavChange={this.onNavChange} onInputChange={this.onInputChange} onButtonChange={this.onButtonChange} onNameChange={this.onNameChange}/>
                  :<Login loadUser={this.loadUser} onNavChange={this.onNavChange}/>
                )
            }
    </div>
  );
}
}
{/*knowing what to do is half the battle. The other half is Execution!!!*/}