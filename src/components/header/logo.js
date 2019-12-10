import React from 'react';
import './logo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () =>(
<div className="wrapper">
  <div className="top_navbar">
    <div className="top_menu">
      <div className="logo">
        <img src="../img/iconLar.png" alt="" srcset=""/>La Receita
        </div>
        <div className="dropdown">
          <button>
          <FontAwesomeIcon icon={faCog} />
            </button>
            <div className="hidden">
                <a href="#"><FontAwesomeIcon icon={faCog} /> Configurações</a>
                <a href="#"><FontAwesomeIcon icon={faQuestionCircle} /> Ajuda</a>
                <a href="#"><FontAwesomeIcon icon={faSignInAlt} /> Sair</a>
            </div>
        </div>
    </div>
    </div>
    </div>
);

export default Header;