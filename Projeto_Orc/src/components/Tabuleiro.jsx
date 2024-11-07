import React from 'react';

const Tabuleiro = ({ quadrados, onClick, bloqueado }) => (
    <div className="tabuleiro">
        {quadrados.map((valor, index) => (
            <div 
                key={index} 
                className="celula" 
                onClick={() => !bloqueado && onClick(index)}
            >
                {valor}
            </div>
        ))}
    </div>
);

export default Tabuleiro;
