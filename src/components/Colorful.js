import React from 'react';

const Colorful = ({word, txtcolor, bgcolor}) => {
    const style ={
        backgroundColor : bgcolor,
        color: txtcolor
    }
    return(
        <h1 style={style}>{word}</h1>
    )
}
export default Colorful;