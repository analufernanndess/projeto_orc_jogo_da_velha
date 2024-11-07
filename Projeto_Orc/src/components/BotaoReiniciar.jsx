import React from 'react';

const BotaoReiniciar = ({ onClick, texto }) => (
    <button className="reiniciarJogo" onClick={onClick}>
        {texto}
    </button>
);

export default BotaoReiniciar;
