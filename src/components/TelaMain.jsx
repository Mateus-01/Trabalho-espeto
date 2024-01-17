import TelaFooter from './TelaFooter'
import '../telaProduto.css' 
export default function TelaMain(props) {
    function esconderTela() {
        var esconderTela = document.getElementById(props.id);
        esconderTela.style.display = 'none';
    }
    return (
        <div id={props.id} className="tela-produto" >
            <button id='voltar' class="btn-voltar" onClick={esconderTela}>&lt;</button>
            <div className='tela-info'>
                <div className="grid" id={props.id} >
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
                        <img src={props.src} alt={props.alt} />
                    </div>
                </div>
                <p className='ingredientes'>Ingredientes</p>
            </div>
            <TelaFooter  />
        </div>
    )
}