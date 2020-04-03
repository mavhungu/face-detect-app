import React from 'react'
import 'tachyons'

const Ronewa = ({onInputChange, onButtonChange, onNameChange})=>{
    return (
     <div className="pa4 black-80">
        <div class="measure center shadow-5 pa3">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <div class="mt3">
                <input type="text" name={'name'} placeholder={"Name"} className={'pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'} onChange={onInputChange}/>
            </div>
            <div class="mt3">
                <input type={'text'} name={'age'} placeholder={"Surname"}  className={'pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'} onChange={onNameChange} />
            </div>
            <div class="mt3">
                <button className={"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"} onClick={onButtonChange}>Login</button>
            </div>
            </fieldset>
        </div>
     </div>   
    );
}
export default Ronewa;