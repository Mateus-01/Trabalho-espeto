import React, { useState } from 'react';
import coroaIcon from '../assets/coroa-dourada.svg';

export default function Produtos(props) {
    const [quantidadePedido, setQuantidadePedido] = useState(0);

    function aumentarQuantidade() {
        setQuantidadePedido(quantidadePedido + 1);
        props.setQuantidadePedido(props.quantidadePedido + 1);
    }

    function diminuirQuantidade() {
        if (quantidadePedido > 0) {
            setQuantidadePedido(quantidadePedido - 1);
            props.setQuantidadePedido(props.quantidadePedido - 1);
        }
    }

    function mostrarTela() {
        var scrollOff = document.getElementById('tela-mobile');
        var mostrarTela = document.getElementById(props.id);

        mostrarTela.style.display = 'flex';
        scrollOff.style.overflow = 'hidden';
        scrollOff.style.height = '100vh';
    }

    return (
        <div>
            <div className="card-mobile">
                <h1>{props.categoria}</h1>
                <img className="coroa" src={coroaIcon} alt="icon coroa" />

                <p className="nome-produto" onClick={() => mostrarTela(props.nomeProduto, props.preco, props.tamanho, props.tempoPreparo, props.unidades, props.src, props.alt)}>{props.nomeProduto}</p>

                <p className="preco-mobile">R${props.preco}</p>

                <img className="img-carne-mobile" onClick={() => mostrarTela(props.nomeProduto, props.preco, props.tamanho, props.tempoPreparo, props.unidades, props.src, props.alt)} src={props.src} alt={props.alt} />
                
                <div className="qnt-pedido" data-app="product.quantity">
                    <input
                        className="btn-remover"
                        type="button"
                        onClick={diminuirQuantidade}
                        value="-"
                    />
                    <input
                        className="numerador"
                        name="quanti"
                        size="1"
                        type="text"
                        maxLength="5"
                        value={quantidadePedido}
                    />
                    <input
                        className="btn-adicionar"
                        type="button"
                        onClick={aumentarQuantidade}
                        value="+"
                    />
                </div>
            </div>
        </div>
    );
}
