export default function TelaMain(props) {
    return (
        <div class="grid">
            <div class="texto">
                <h2 class="nomeProduto">Espeto de linguiça</h2>
                <p class="preco">R$8.00</p>
                <ul class="info">
                    <li>Tamanho</li>
                    <li>{props.tamanho}</li>
                    <li>Tempo de preparo</li>
                    <li>{props.tempoPreparo}</li>
                    <li>Unidades</li>
                    <li>{props.unidades}</li>
                </ul>
            </div>
            <div class="imagem">
                <img src={props.href} alt={props.alt}/>
            </div>
        </div>
    )
}