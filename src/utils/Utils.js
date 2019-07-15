import React from 'react';
class Utils extends React.Component{
    static last(array){
        return array[array.length - 1];
    }
    static getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max)+1);
      }
}
export default Utils;
