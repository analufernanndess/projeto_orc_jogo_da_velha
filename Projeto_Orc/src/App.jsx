import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CadastroJogadores from './pages/CadastroJogadores';
import Jogo from './pages/Jogo';

const App = () => {
    const [modoJogo, setModoJogo] = useState(''); 
    const [jogadores, setJogadores] = useState({});
    const [simboloJogador, setSimboloJogador] = useState('X');

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage setModoJogo={setModoJogo} />} />
                <Route
                    path="/cadastro"
                    element={
                        <CadastroJogadores
                            setJogadores={setJogadores}
                            setSimboloJogador={setSimboloJogador}
                            modoJogo={modoJogo}
                        />
                    }
                />
                <Route
                    path="/jogo"
                    element={<Jogo jogadores={jogadores} simboloJogador={simboloJogador} modoJogo={modoJogo} />}
                />
            </Routes>
        </Router>
    );
};

export default App;
