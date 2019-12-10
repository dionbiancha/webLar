import React from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const Side = () =>(
<div className="sidebar">
        <ul>
          <li className="namelist">Cadastro</li>
                <li>
                    <Link to="/produtos" id="link-produtos">
                        <span className="icon"><FontAwesomeIcon icon={faArchive} /></span>
                        <span className="title">Produtos</span>
                    </Link>
                </li>
                <li>
                    <Link to="/receitas" id="link-receitas">
                        <span className="icon"><FontAwesomeIcon icon={faBook} /></span>
                        <span className="title">Receitas</span>
                    </Link>
                </li>
    </ul>
    <ul>
        <li className="namelist">Gerenciamento</li>
    </ul>
    <ul>
        <li><a href="#">
        <span className="icon"><FontAwesomeIcon icon={faDatabase} /></span>
        <span className="title">Informações</span>
        </a></li>
    </ul>
</div>
);

export default Side;