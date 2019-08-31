import React from 'react';
import './styless.scss'
import Logo from '../../img/beats.png'
const Header = (props) => {
    return (
        <header data-test="headerComponent">
           <div className="wrap">
               <div className="logo">
                    <img data-test="logoIMG" src={Logo} alt='logo'/>
               </div>
           </div>
        </header>
    )
};

export default Header;