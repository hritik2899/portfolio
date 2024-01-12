import {useEffect} from 'react'
import Typed from 'typed.js'

function Role() {

    const roles = [ '<span style="color:#bebff6">Full Stack Developer</span>',
                    '<span style="color:#d68888">Competitive Programmer</span>',
                    '<span style="color:#79f0fc">Algorithm Enthusiast</span>',
                ]

    useEffect(() => {
        const options = {
            strings: roles,
            typeSpeed: 70,
            backSpeed: 50,
            loop: true,
            cursorChar: "|",
        };
        let typed = new Typed('#role', options);
    }, [])

    return (<span id="role"></span>)
}

export default Role
