import React, { Component } from "react";
import Logo from '../header/logo';
import Side from '../side/sidebar';
import OpenForm from '../main/buttonbar/popupform'

import '../../sass/global.scss'

class Recipe extends Component {
  render(){
    return (
      <div className="Home">
        <Logo />
        <Side />
        <OpenForm text="+ Registrar Receita"/>
      </div>
    );
  }
}
export default Recipe;