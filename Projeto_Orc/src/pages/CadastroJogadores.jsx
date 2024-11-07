import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import InputJogador from '../components/InputJogador';

const CadastroJogadores = ({setJogadores, setSimboloJogador, modoJogo}) => {
    const [nomeJogador1, setNomeJogador1] = useState('');
    const [nomeJogador2, setNomeJogador2] = useState(modoJogo === 'singleplayer' ? 'Bot' : '');
    const [simboloEscolhido, setSimboloEscolhido] = useState('X');
    const navigate = useNavigate();

    const iniciarJogo = () => {
        const jogadores = simboloEscolhido === 'X' 
            ? {jogador1: {nome: nomeJogador1, simbolo: 'X'}, jogador2: { nome: nomeJogador2 || 'Jogador 2', simbolo: 'O'}}
            : {jogador1: {nome: nomeJogador2 || 'Jogador 2', simbolo: 'X'}, jogador2: {nome: nomeJogador1, simbolo: 'O'}};

        setJogadores(jogadores);
        setSimboloJogador(simboloEscolhido);
        navigate('/jogo');
    };

    return (
        <div className="cadastro-jogadores">
            <h1>Cadastro de Jogadores</h1>
            <InputJogador
                label="Nome do Jogador 1 "
                value={nomeJogador1}
                onChange={(e) => setNomeJogador1(e.target.value)}
            />
            {modoJogo === 'multiplayer' && (
                <InputJogador
                    label="Nome do Jogador 2 "
                    value={nomeJogador2}
                    onChange={(e) => setNomeJogador2(e.target.value)}
                />
            )}
            <div>
                <label>Escolha seu símbolo:</label>
                <select value={simboloEscolhido} onChange={(e) => setSimboloEscolhido(e.target.value)}>
                    <option value="X">X</option>
                    <option value="O">O</option>
                </select>
            </div>
            <button onClick={iniciarJogo} disabled={!nomeJogador1 || (!nomeJogador2 && modoJogo === 'multiplayer')}>
                Iniciar Jogo
            </button>
        </div>
    );
};

export default CadastroJogadores;
