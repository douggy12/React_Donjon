import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Game from './component/Game';
import DonjonProt from './donjons/DonjonProt';
import Hero from './heros/Hero';


var start = () =>{
  console.log("game: start");
    ReactDOM.render(
      <Game game={{donjon: new DonjonProt(), hero : new Hero()}}/>,
      document.getElementById('root'),
    );
  }
start();