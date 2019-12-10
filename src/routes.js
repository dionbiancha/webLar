import React from 'react';
import Home from './components/pages/productregister';
import Recipe from './components/pages/reciperegister';
import { Switch, Route } from 'react-router-dom';


export const Routes = () => {
    return(
        <Switch>
            <Route path="/produtos" component ={Home} exact />
            <Route path="/receitas" component={Recipe} exact />
        </Switch>   
    );
};

export default Routes; 