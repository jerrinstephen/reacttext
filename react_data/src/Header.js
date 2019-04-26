import React, { Component } from 'react';
import Headertitle from './Headertitle.js';
import Data from './Data.js';

class Header extends Component{
    render(){
        return(
          <div className="container">
            <Headertitle />
            <Data />
          </div>  
        );
    }
}

export default Header;