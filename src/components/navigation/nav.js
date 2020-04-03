import React from 'react'

const Nav = ({onNavChange, isSignedIn})=>{
    if (isSignedIn) {
        return (
            <nav class="db dt-l w-100 border-box pa3 ph5-l">
                <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
                    <img src="./logo192.png" class="dib w2 h2 br-100 grow" alt="Site Name" onClick={() => onNavChange('login')} />
                </a>
                    <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
                        <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l grow" href="#" title="Blog">Blog</a>
                        <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l grow" href="#" title="Press">Press</a>
                        <a class="link dim dark-gray f6 f5-l dib grow" href="#" title="Contact">Contact</a>
                    </div>
            </nav>
        );
    } else {
            return (
            <nav class="db dt-l w-100 border-box pa3 ph5-l">
                <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
                    <img src="./logo192.png" class="dib w2 h2 br-100 grow" alt="Site Name" onClick={() => onNavChange('login')} />
                </a>
                <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l grow" onClick={() => onNavChange('signin')}>Home</a>
                    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l grow" onClick={() => onNavChange('login')}>Login</a>
                </div>
            </nav>
            );
        }
}
export default Nav