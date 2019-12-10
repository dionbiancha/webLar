import React, { Component } from "react";
import Logo from '../header/logo';
import Side from '../side/sidebar';


import '../../sass/global.scss'

class Recipe extends Component {
  render(){
    return (
      <div className="Home">
        <Logo />
        <Side />
      
      </div>
    );
  }
}
export default Recipe;