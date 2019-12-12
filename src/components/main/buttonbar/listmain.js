import React, { Component } from 'react';
import './list.scss';

class List extends Component {
  render() {
        return (
            <div className="mainbox">
                <ul>
                <li>Nome: Filé de Frango Código: 240204042<button className="Edit">Editar</button></li>
                </ul>
            </div>
        )
    }

}

export default List;