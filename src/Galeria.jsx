import React from 'react'
import "./Galeria.css";
import Combo from './Combo'

export default function Galeria() {
    const combos = [
        {
            foto: "big-king.webp",
            nome: "Combo Big King",
            descricao: "Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
            qnt: "Serve 1 pessoa",
            preco: "R$ 41,90",
        },
        {
            foto: "cheddar-duplo.webp",
            nome: "Combo Cheddar Duplo",
            descricao: "Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão preto com gergelim,...",
            qnt: "Serve 1 pessoa",
            preco: "R$ 41,90",
        },
        {
            foto: "cheeseburger-duplo.webp",
            nome: "Combo Cheeseburger Duplo com Bacon",
            descricao: "Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
            qnt: "Serve 1 pessoa",
            preco: "R$ 36,90",
        },
        {
            foto: "mega-stacker.webp",
            nome: "Combo Mega Stacker 2.0",
            descricao: "Um hambúrguer com duas carnes bovinas grelhadas de 113g, pão com gergelim, queijo...",
            qnt: "Serve 1 pessoa",
            preco: "R$ 51,90",
        },
    ];

    return (
        <div className="galeria">
            <h1>Destaques</h1>
            <div className="combos">
                { combos.map( (combo, pos) => {
                    return <Combo
                        foto={combo.foto}
                        nome={combo.nome}
                        descricao={combo.descricao}
                        qnt={combo.qnt}
                        preco={combo.preco}
                    />
                } ) }
            </div>
        </div>
    )
}
