import './telaProduto.css'
import TelaMain from './components/TelaMain'
import TelaFooter from './components/TelaFooter'


export default function TelaProduto() {
    return (
        <div className='detalhe-prodt'>
            <button class="btn-voltar">&lt;</button>
            <TelaMain />
            <p class="ingredientes">ingredientes</p>
            <TelaFooter />
        </div>
    )
}