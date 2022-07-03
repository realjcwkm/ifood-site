import React from "react";
import './Header.css';

export default function Header() {
    return (
        <div className="header">
            <img src="logo.svg" alt="iFood" />
            <ul className="menu">
                <li>Entregador</li>
                <li>Restaurante e Mercado</li>
                <li>Carreiras</li>
                <li>iFood Card</li>
            </ul>
            <button className="btn-create">Criar conta</button>
            <button className="btn-login">Entrar</button>
        </div>
    );
}
