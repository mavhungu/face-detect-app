import React from 'react'
import './search.css'

const Detect = ({onImageChange, onImageButtonClick})=>{
    return (
        <div className={""}>
            <div className={"f2"}>
                {'Face Detect App'}
            </div>
            <div className={"form center pa4 br3 shadow-5"}>
                <input type={"text"} name={'imageChange'} className={'f4 pa2 w-70 center'} onChange={onImageChange}/>
                <button className={"w-30 grow f4 link ph3 pv2 dib white bg-light-purple"}
                onClick={onImageButtonClick}>Detect</button>
            </div>
        </div>
    );
}
export default Detect