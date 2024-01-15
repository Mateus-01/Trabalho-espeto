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
        <div className='detalhe-prodt' id='telaProduto'>
            <button id='voltar'  class="btn-voltar" onClick={esconderTela}>&lt;</button>
            <TelaMain />
            <p class="ingredientes">ingredientes</p>
            <TelaFooter />
        </div>
    )
}