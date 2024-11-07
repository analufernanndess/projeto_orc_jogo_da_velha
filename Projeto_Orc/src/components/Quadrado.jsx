import React from 'react';

const Quadrado = ({value, onClick}) => (
    <button className="quadrado" onClick={onClick}>
        {value}
    </button>
);

export default Quadrado;
