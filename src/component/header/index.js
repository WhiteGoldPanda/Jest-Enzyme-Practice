import React from 'react';
import './styless.scss'
import Logo from '../../img/beats.png'
const Header = (props) => {
    return (
        <header>
           <div className="wrap">
               <div className="logo">
                    <img src={Logo} alt='logo'/>
               </div>
           </div>
        </header>
    )
};

export default Header;