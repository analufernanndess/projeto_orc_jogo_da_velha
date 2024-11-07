import React from 'react';

const Placar = ({vitoriasJogador1, vitoriasJogador2, nomeJogador1, nomeJogador2}) => (
    <div className="placar">
        <p>{nomeJogador1}: {vitoriasJogador1} vitórias</p>
        <p>{nomeJogador2}: {vitoriasJogador2} vitórias</p>
    </div>
);

export default Placar;
