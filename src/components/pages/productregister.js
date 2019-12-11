import React, { Component } from "react";
import Logo from '../header/logo';
import Side from '../side/sidebar';
import '../../sass/global.scss';
import OpenForm from "../main/buttonbar/popupform";
import List from '../main/buttonbar/list';
import Listmain from "../main/buttonbar/listmain";

class Home extends Component {
  componentDidMount(){
    document.title = "Dashboard"
  }
  render(){
    return (
      <div className="Home">
        <Logo />
        <Side />
        <OpenForm text="+ Registrar Produto"/>
        <Listmain/>
      </div>
    );
  }
}
export default Home;