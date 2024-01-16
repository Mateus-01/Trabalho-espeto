import React, { useState } from 'react';

export default function Produtos(props) {
    const [quantidadeNoCarrinho, setQuantidadeNoCarrinho] = useState(0);
    const [mostrarBotao, setMostrarBotao] = useState(false);

    function adicionarAoCarrinho(nomeProduto, valorUnitario) {
        const novaQuantidade = quantidadeNoCarrinho + 1;
        setQuantidadeNoCarrinho(novaQuantidade);

        setMostrarBotao(true);

        console.log(`Produto adicionado ao carrinho: ${nomeProduto}, Valor: ${valorUnitario}`);
    }
    function mostrarTela() {
        var mostrarTela = document.getElementById(props.id);
        mostrarTela.style.display = 'flex';
    }
    return (
        <div>
            <div className="card-mobile" onClick={() => mostrarTela(props.nomeProduto, props.preco, props.tamanho, props.tempoPreparo, props.unidades, props.src, props.alt)}>
                <h1>{props.categoria}</h1>
                <img className="coroa" src="./src/assets/coroa-dourada.svg" alt="icon coroa"/>
                <p className="nome-produto">{props.nomeProduto}</p>
                <p className="preco-mobile">R${props.preco}</p>
                <img className="img-carne-mobile" src={props.src} alt={props.alt} />
                <div className="qnt-pedido" data-app="product.quantity">
                    <input className="btn-remover" type="button" id="menos" value='-' onClick={() => adicionarAoCarrinho(props.nomeProduto, props.preco)} />
                    <input className="numerador" id="numerador" name="quanti" size="1" type="text" value="0" maxLength="5" />
                    <input className="btn-adicionar" type="button" id="mais" value='+' onClick={() => adicionarAoCarrinho(props.nomeProduto, props.preco)} />
                </div>
            </div>
            {mostrarBotao && (
                <button className="botao-centralizado" onClick={() => setMostrarBotao(false)}>
                    Adicionar ao Carrinho
                </button>
            )}
        </div>
    );
}
