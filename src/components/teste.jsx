import React, { useState } from 'react';
import TelaProduto from '../TelaProduto';

export default function Produtos(props) {
    const [quantidadeNoCarrinho, setQuantidadeNoCarrinho] = useState(0);
    const [mostrarTelaProduto, setMostrarTelaProduto] = useState(false);

    function adicionarAoCarrinho(nomeProduto, valorUnitario) {
        const novaQuantidade = quantidadeNoCarrinho + 1;
        setQuantidadeNoCarrinho(novaQuantidade);

        // Mostrar a tela do produto quando adicionado ao carrinho
        setMostrarTelaProduto(true);

        console.log(`Produto adicionado ao carrinho: ${nomeProduto}, Valor: ${valorUnitario}`);
    }

    function fecharTelaProduto() {
        setMostrarTelaProduto(false);
    }

    return (
        <div>
            <div className="card-mobile" onClick={() => adicionarAoCarrinho(props.nomeProduto, props.preco)}>
                {/* Conteúdo do card de produto */}
            </div>
            {mostrarTelaProduto && (
                <TelaProduto
                    nomeProduto={props.nomeProduto}
                    preco={props.preco}
                    fecharTela={fecharTelaProduto}
                />
            )}
        </div>
    );
}