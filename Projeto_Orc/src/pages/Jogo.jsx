import React, {useState, useEffect} from 'react';
import Tabuleiro from '../components/Tabuleiro';
import Placar from '../components/Placar';
import BotaoReiniciar from '../components/BotaoReiniciar';

const Jogo = ({jogadores, simboloJogador, modoJogo}) => {
    const [quadrados, setQuadrados] = useState(Array(9).fill(null));
    const [jogadorAtual, setJogadorAtual] = useState(simboloJogador);
    const [vitorias, setVitorias] = useState({ [jogadores.jogador1.nome]: 0, [jogadores.jogador2.nome]: 0 });
    const [mensagem, setMensagem] = useState('');
    const [bloqueado, setBloqueado] = useState(false);

    useEffect(() => {
        if (modoJogo === 'singleplayer' && jogadorAtual === jogadores.jogador2.simbolo && !mensagem) {
            setBloqueado(true);
            setTimeout(() => {
                jogadaDoRobo();
            }, 1000); 
        }
    }, [jogadorAtual]);

    const checarVitoria = (novoQuadrados) => {
        const linhasDeVitoria = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let linha of linhasDeVitoria) {
            const [a, b, c] = linha;
            if (novoQuadrados[a] && novoQuadrados[a] === novoQuadrados[b] && novoQuadrados[a] === novoQuadrados[c]) {
                return novoQuadrados[a];
            }
        }
        return null;
    };

    const realizarJogada = (index) => {
        if (quadrados[index] || mensagem || bloqueado) return;

        const novoQuadrados = quadrados.slice();
        novoQuadrados[index] = jogadorAtual;
        setQuadrados(novoQuadrados);

        const vencedor = checarVitoria(novoQuadrados);
        if (vencedor) {
            const vencedorNome = vencedor === jogadores.jogador1.simbolo ? jogadores.jogador1.nome : jogadores.jogador2.nome;
            setMensagem(`${vencedorNome} venceu!`);
            setVitorias((prev) => ({
                ...prev,
                [vencedorNome]: prev[vencedorNome] + 1,
            }));
        } else if (novoQuadrados.every((square) => square !== null)) {
            setMensagem('Empate!');
        } else {
            setJogadorAtual(jogadorAtual === 'X' ? 'O' : 'X');
        }
    };

    const jogadaDoRobo = () => {
        const posicoesVazias = quadrados
            .map((val, idx) => (val === null ? idx : null))
            .filter((val) => val !== null);

        if (posicoesVazias.length > 0) {
            const escolhaRobo = posicoesVazias[Math.floor(Math.random() * posicoesVazias.length)];
            realizarJogada(escolhaRobo);
        }

        setBloqueado(false);
    };

    const reiniciarJogo = () => {
        setQuadrados(Array(9).fill(null));
        setMensagem('');
        setJogadorAtual(simboloJogador);
        setBloqueado(false);
    };

    const reiniciarPlacar = () => {
        setQuadrados(Array(9).fill(null));
        setMensagem('');
        setJogadorAtual(simboloJogador);
        setBloqueado(false);
        setVitorias({
            [jogadores.jogador1.nome]: 0,
            [jogadores.jogador2.nome]: 0,
        });
    };

    return (
        <div className="jogo">
            <h1>Jogo da Velha</h1>
            <Placar
                vitoriasJogador1={vitorias[jogadores.jogador1.nome]}
                vitoriasJogador2={vitorias[jogadores.jogador2.nome]}
                nomeJogador1={jogadores.jogador1.nome}
                nomeJogador2={jogadores.jogador2.nome}
            />
            <Tabuleiro quadrados={quadrados} onClick={realizarJogada} bloqueado={bloqueado} />
            {mensagem && <p>{mensagem}</p>}
            {bloqueado && <p>Aguarde... O robô está jogando!</p>}
            <button className='reiniciarPlacar' onClick={reiniciarPlacar}>Reiniciar Placar</button>
            <BotaoReiniciar onClick={reiniciarJogo} texto="Reiniciar Jogo" />
        </div>
    );
};

export default Jogo;
