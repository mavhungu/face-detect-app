import React from 'react'

const Nav = ({onNavChange, isSignedIn})=>{
    if (isSignedIn) {
        return (
            <nav className="db dt-l w-100 border-box pa3 ph5-l">
                <a className="db dtc-l v-mid mid-gray link w-100 w-25-l tc tl-l mb2 mb0-l pointer" href="#" title="Home">
                    <img src='./small.png' className="dib w2 h2 br-100 grow pointer" alt="Site Name" onClick={() => onNavChange('login')} />
                </a>
                    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l grow pointer" href="#" onClick={() => onNavChange('home')} >Home</a>
                        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l grow pointer" href="#" >Profile</a>
                        <a className="link dim dark-gray f6 f5-l dib grow pointer" href="#" onClick={() => onNavChange('signin')} >Logout</a>
                    </div>
            </nav>
        );
    } else {
            return (
            <nav className="db dt-l w-100 border-box pa3 ph5-l">
                <a className="db dtc-l v-mid mid-gray link w-100 w-25-l tc tl-l mb2 mb0-l pointer" href="#" title="Home">
                    <img src="./small.png" className="dib w2 h2 br-100 grow pointer" alt="Site Name" onClick={() => onNavChange('login')} />
                </a>
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l grow pointer" href="#" onClick={() => onNavChange('signin')}>Home</a>
                    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l grow pointer" href="#" onClick={() => onNavChange('login')}>Login</a>
                </div>
            </nav>
            );
        }
}
export default Nav