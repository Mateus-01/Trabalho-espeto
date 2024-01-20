import React, { useState } from 'react';
import coroaIcon from '../assets/coroa-dourada.svg'

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
        var scrollOff = document.getElementById('tela-mobile');
        var mostrarTela = document.getElementById(props.id);

        mostrarTela.style.display = 'flex';
        scrollOff.style.overflow = 'hidden';
        scrollOff.style.height = '100vh';
    }
    
    return (
        <div>
            <div className="card-mobile" >
                <h1>{props.categoria}</h1>
                <img className="coroa"  src={coroaIcon} alt="icon coroa"/>
                <p className="nome-produto" onClick={() => mostrarTela(props.nomeProduto, props.preco, props.tamanho, props.tempoPreparo, props.unidades, props.src, props.alt)}>{props.nomeProduto}</p>
                <p className="preco-mobile">R${props.preco}</p>
                <img className="img-carne-mobile" onClick={() => mostrarTela(props.nomeProduto, props.preco, props.tamanho, props.tempoPreparo, props.unidades, props.src, props.alt)} src={props.src} alt={props.alt} />
                <div className="qnt-pedido" data-app="product.quantity">
                <input
                        className="btn-remover"
                        type="button"
                        id="menos"
                        value="-"
                        onClick={() => setQuantidadeNoCarrinho(Math.max(0, quantidadeNoCarrinho - 1))}
                        />
                <input
                        className="numerador"
                        id="numerador"
                        name="quanti"
                        size="1"
                        type="text"
                        value={quantidadeNoCarrinho}
                        maxLength="5"
                        />
                <input
                        className="btn-adicionar"
                        type="button"
                        id="mais"
                        value="+"
                        onClick={() => setQuantidadeNoCarrinho(quantidadeNoCarrinho + 1)}
                        />
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
