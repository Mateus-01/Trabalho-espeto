export default function TelaMain(props) {
    return (
        <div class="grid" >
            <div class="texto">
                <h2 class="nomeProduto">{props.nomeProduto}</h2>
                <p class="preco">R${props.preco}</p>
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
                <img src={props.src} alt={props.alt}/>
            </div>
        </div>
    )
}