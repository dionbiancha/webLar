import React, { Component } from "react";
import Logo from '../header/logo';
import Side from '../side/sidebar';
import '../../sass/global.scss'
import OpenForm from "../main/buttonbar/popupform";
import NewSongForm from '../main/buttonbar/NewSongForm';

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
        <NewSongForm/>
      </div>
    );
  }
}
export default Home;