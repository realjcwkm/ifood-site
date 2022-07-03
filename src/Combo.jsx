import React from "react";
import "./Combo.css";

export default function Combo( {foto, nome, descricao, qnt, preco} ) {
    return (
        <div className="combo">
            <img src={foto} alt={nome} />
            <h3 className="nome">{nome}</h3>
            <p className="desc">
                {descricao}
            </p>
            <p className="info">{qnt}</p>
            <p className="valor">{preco}</p>
        </div>
    );
}
