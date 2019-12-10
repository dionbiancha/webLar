import React, { Component } from 'react';
import Popup from './popup.js';
import NewSongForm from './NewSongForm.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './form.scss';


class OpenForm extends Component{
    state = {
        isOpen: false
        
    }
    render(){
        return(
            <div>
            <div className="button">
                <button className="submit" onClick={(e) => this.setState({ isOpen: true})}>{this.props.text}</button>
                <input type="text" placeholder="Pesquisar..." name="search" className="search"/>
                <button type="submit" className="buttonsearch"><FontAwesomeIcon icon={faSearch} className="icon" /></button>
            </div>
            <Popup isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
            </Popup>
                
            </div>
        );
    }
}

export default OpenForm;