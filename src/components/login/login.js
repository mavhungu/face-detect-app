import React,{Component} from 'react'
import axios from 'axios'
import 'tachyons'

export default class Login extends Component {// = ({onInputChange, onButtonChange, onNameChange, onNavChange})=>{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            user: {
                id: '',
                name: '',
                email: '',
                entries: 0,
                joined: ''
              }

        }
    }
    onInputChange=(event)=>{
        this.setState({email: event.target.value})
        //console.log({name: event.target.value});
    }
      onNameChange=(event)=>{
        this.setState({password: event.target.value})
        //console.log({password: event.target.value});
      }

        onSubmits = (event)=>{
            //e.preventDefauld();
            event.preventDefault();
            const users = {
                name: this.state.email,
                password: this.state.password
            }
            console.log(users)

                axios.post('http://localhost:3001/users', users)
                .then(res=>{
                    if(res.data.length >0){
                        this.props.onNavChange('home');
                        console.log(res.data)
                    }
                })
                
                
                /*.then(user => {
                    if (user.id) {
                    this.props.loadUser(user)
                    this.props.onNavChange('home');
                    }
                })*/

                this.setState({
                    email: '',
                    password: ''
                })
        
        }


    render(){
        const { name, password,onNavChange } = this.state;
    return (
        <div className="pa4 black-80">
            <form className="measure center shadow-3 pa3" onSubmit={this.onSubmits}>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0 center">Log In</legend>
                        <div className="mt3">
                            <input type="email" name={'email'} placeholder={"Name"} required
                            className={'pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'} 
                            onChange={this.onInputChange}/>
                        </div>
                        <div className="mt3">
                            <input type={'text'} name={"password"} placeholder={"Password"}  
                            className={'pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'} 
                            onChange={this.onNameChange} />
                        </div>
                        <div className="mt3">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" value="Login" />
                                
                            {/*<button className={"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"} 
                                onClick={()=>onNavChange('home')}>Login
                            </button>*/}
                        </div>
                </fieldset>
            </form>
        </div>   
    );
}
}
//export default Login;