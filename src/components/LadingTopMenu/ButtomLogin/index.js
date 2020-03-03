import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

function ButtomLogin() {
  return (
    <div class="login">
        <Link to="/login">
            <button class="btn btn-outline-danger">Login</button>
        </Link>
    </div>
  );
}

export default ButtomLogin;
