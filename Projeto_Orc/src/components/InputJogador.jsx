import React from 'react';

const InputJogador = ({label, value, onChange}) => (
    <div>
        <label>{label}</label>
        <input type="text" value={value} onChange={onChange} />
    </div>
);

export default InputJogador;
