import React, { useState } from 'react';

export default function Produtos(props) {
  // Estado para rastrear a quantidade do produto no carrinho
  const [quantidadeNoCarrinho, setQuantidadeNoCarrinho] = useState(0);

  // Função para adicionar ao carrinho
  function adicionarAoCarrinho(nomeProduto, valorUnitario) {
    // Lógica para adicionar ao carrinho
    const novaQuantidade = quantidadeNoCarrinho + 1;
    setQuantidadeNoCarrinho(novaQuantidade);

    // Este bloco é apenas para fins de exemplo, você deve integrar a lógica conforme necessário.
    console.log(`Produto adicionado ao carrinho: ${nomeProduto}, Valor: ${valorUnitario}`);
  }

  // JSX do componente Produtos
  return (
    <div className="card-mobile">
      <h1>{props.categoria}</h1>

      <img className="coroa" src="./src/assets/coroa-dourada.svg" alt="icon coroa" />
      <p className="nome-produto">{props.nomeProduto}</p>
      <p className="preco-mobile">R${props.preco}</p>

      <img className="img-carne-mobile" src={props.src} alt={props.alt} />

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
          onClick={() => adicionarAoCarrinho(props.nomeProduto, parseFloat(props.preco))}
        />
      </div>

      {/* Exibir o botão no meio da tela inteira */}
      {quantidadeNoCarrinho >= 1 && (
        <div style={{position: 'relative', marginLeft: '30vw'}} className="botao-no-meio">
          <button style={{height: '70px', borderRadius: '30px', backgroundColor: 'yellow'}} id="botao">Botão de Exemplo</button>
          {/* Substitua "Botão de Exemplo" pelo conteúdo que você deseja exibir */}
        </div>
      )}
    </div>
  );
}
    