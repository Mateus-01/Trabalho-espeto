import './telaProduto.css'
import TelaMain from './components/TelaMain'
import TelaFooter from './components/TelaFooter'
import './telaProduto.css'

export default function TelaProduto(){
    function esconderTela() {
        var esconderTela = document.getElementById('telaProduto');
        esconderTela.style.display = 'none';
    }
    return (
        <div className='detalhe-prodt' id='telaProduto'>
            <button id='voltar' onClick={esconderTela} class="btn-voltar">&lt;</button>
            <TelaMain />
            <p class="ingredientes">ingredientes</p>
            <TelaFooter />
        </div>
    )
}