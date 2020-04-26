import React from  'react'
import 'tachyons'

const Signin =({onNavChange, onInputChange, onNameChange, onButtonChange})=>{
    return(
    <div className={'nn'}>
        <main className="pa4 black-80">
            <form className="measure center shadow-3 pa3" onSubmit={onButtonChange}>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0 center">Sign Up</legend>
                <div className="mt3">
                    {/*<label class="db fw6 lh-copy f6" for="email-address">Email</label>*/}
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="email" required name="email-address" placeholder={'Email'} id="email-address" onChange={onInputChange} />
                </div>
                <div className="mv3">
                    {/*<label class="db fw6 lh-copy f6" for="password">Password</label>*/}
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" required name={"password"} placeholder={'Password'}  id="password" onChange={onNameChange}/>
                </div>
                {/*<label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me </label>*/}
                </fieldset>
                <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                type="submit" value="Sign in" />
                </div>
                <div className="lh-copy mt3">
                <a href="#0" onClick={()=>onNavChange('login')} className="f6 link dim black db" style={{cursor:'pointer',}}>Login</a>
                {/*<a href="#0" class="f6 link dim black db">Forgot your password?</a>*/}
                </div>
            </form>
        </main>
    </div>
    );
}
export default Signin;