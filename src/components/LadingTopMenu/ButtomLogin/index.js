import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';
import i18n from '../../../config/i18n';

function ButtomLogin() {
  return (
    <div class="login">
        <Link to="/login">
            <button class="btn btn-outline-danger">{i18n.t('glossary:login')}</button>
        </Link>
    </div>
  );
}

export default ButtomLogin;
