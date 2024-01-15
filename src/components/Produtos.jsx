import React, { useState } from 'react';
import TelaProduto from '../TelaProduto';
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
      function mostrarTela() {
          var mostrarTela = document.getElementById('telaProduto');
          mostrarTela.style.display = 'flex';
      }
      
    return (
        <div>
          <div className="card-mobile" onClick={mostrarTela}>
              <h1>{props.categoria}</h1>
              <img className="coroa" src="./src/assets/coroa-dourada.svg" alt="icon coroa" />
              <p className="nome-produto">{props.nomeProduto}</p>
              <p className="preco-mobile">R${props.preco}</p>
              <img className="img-carne-mobile" src={props.src} alt={props.alt} />
              <div className="qnt-pedido" data-app="product.quantity">
                  <input className="btn-remover" type="button" id="menos" value='-'
                      onclick="process_geral(-1, this)" />
                  <input className="numerador" id="numerador" name="quanti" size="1"
                      type="text" value="0" maxlength="5" />
                  <input className="btn-adicionar" type="button" id="mais" value='+'
                      onclick="process_geral(1, this)" />
              </div>
          </div>
          <TelaProduto/>
        </div>
    );
}
    