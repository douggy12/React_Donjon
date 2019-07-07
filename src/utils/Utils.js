import React from 'react';
class Utils extends React.Component{
    static last(array){
        return array[array.length - 1];
    }

    static getEmptyHall(nbDoor){
        return {portes: Array(nbDoor).fill({status: "close"})};
    }
}
export default Utils;
