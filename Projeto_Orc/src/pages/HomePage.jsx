import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = ({ setModoJogo }) => {
  return (
    <div className="pagina-inicial">
      <h1 className="titulo">JOGO DA VELHA</h1>
      <div className="botoes-container">
        <Link to="/cadastro">
          <button className="botao" onClick={() => setModoJogo('singleplayer')}>
            1 PLAYER
          </button>
        </Link>
        <Link to="/cadastro">
          <button className="botao" onClick={() => setModoJogo('multiplayer')}>
            2 PLAYERS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
