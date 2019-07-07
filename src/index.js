import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Game from './component/Game';
import DonjonProt from './donjons/DonjonProt';


var start = () =>{
  console.log("game: start");
    ReactDOM.render(
      <Game donjon= {new DonjonProt()}/>,
      document.getElementById('root'),
    );
  }
start();