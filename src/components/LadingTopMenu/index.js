import React from 'react';
import './style.css';

import ItensMenu from './ItensMenu';
import ButtomLogin from './ButtomLogin';

function LadingTopMenu() {
  return (
    <div className="App">
        <div className="Left">
          <div className="Logo">
            <img src={require('./icone.png')} className="Icon"/>
            <h3>La Receita</h3>
          </div>
          <ItensMenu />
        </div>
        <div className="Right">
          <ButtomLogin />
        </div>
    </div>
  );
}

export default LadingTopMenu;
