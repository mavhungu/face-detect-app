import React from 'react'

const Detect = ({onInputChange, onButtonChange})=>{
    return (
        <div className={""}>
            <div className={"f2"}>
                {'This app will detect the face'}
            </div>
            <div className={"pa3"} style={{backgroundColor: 'silver',}}>
                <input type={"text"} className={'pa1'} onChange={onInputChange}/>
                <button className={"pa1 ml2"} style={{backgroundColor: 'pink', border:'none', cursor: 'pointer',}}
                onClick={onButtonChange}>Detect</button>
            </div>
        </div>
    );
}
export default Detect