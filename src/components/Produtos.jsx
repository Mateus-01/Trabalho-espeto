export default function Produtos(props) {
    return (
        <div className="card-mobile">
            <h1>Espetos</h1>

            <img className="coroa" src="imagens/coroa dourada-2.svg" alt="" />
            <p className="nome-produto">{props.produto}</p>
            <p className="preco-mobile">R$ {props.preco}</p>

            <img className="img-carne-mobile" src="imagens/img-espeto-de-carne-mobile.png" alt="" />

            <div className="qnt-pedido" data-app="product.quantity">
                <input className="btn-remover" type="button" id="menos" value='-'
                    onclick="process_geral(-1, this)" />

                <input className="numerador" id="numerador" name="quanti" size="1"
                    type="text" value="0" maxlength="5" />

                <input className="btn-adicionar" type="button" id="mais" value='+'
                    onclick="process_geral(1, this)" />
            </div>
        </div>
    );
}
