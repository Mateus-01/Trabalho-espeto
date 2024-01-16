import './telaProduto.css'
import TelaMain from './components/TelaMain'
import TelaFooter from './components/TelaFooter'
import './telaProduto.css'

export default function TelaProduto(props){
    function esconderTela() {
        var esconderTela = document.getElementById('telaProduto');
        esconderTela.style.display = 'none';
    }
    return (
        <div id="telaProduto" className="tela-produto" style={{ display: props.mostrar ? 'flex' : 'none' }}>
            <button id='voltar'  class="btn-voltar" onClick={esconderTela}>&lt;</button>
            <TelaMain
                nomeProduto={props.nomeProduto}
                preco={props.preco}
                tamanho={props.tamanho}
                tempoPreparo={props.tempoPreparo}
                unidades={props.unidades}
                href={props.src}
                alt={props.alt}
            />
        </div>
    )
}
{/*<button id='voltar'  class="btn-voltar" onClick={esconderTela}>&lt;</button> <div className="tela-produto">
        <h2>{props.nomeProduto}</h2>
        <p>Preço: R${props.preco}</p>
        {/* Adicione outros textos relevantes do card aqui */
    
    
    
    
    }
