import React from 'react';
import './style.css';
import i18n from '../../../config/i18n';

function ItensMenu() {
  return (
    <div className="nav_menu">
        <div id="menu_scrow">
            <ul>
                <li><a href="#aplicativo">{i18n.t('glossary:app')}</a></li>
                <li><a href="#funcionalidades">Funcionalidades</a></li>
                <li><a href="#localizacao">Localização</a></li>
            </ul>
        </div>
    </div>
  );
}

export default ItensMenu;
