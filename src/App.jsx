import { useState } from 'react'
import './index.css'
import Aside from './components/Aside'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='desktop'></div>

      <div className='mobile'>
        <Header />
        <main>
          <h3>Categorias</h3>
          <div className='categorias-mobile'>
            <Aside
              title="Espetos"
              alt="icone de espeto"
              href="./src/assets/espeto-icon.png"
            />
            <Aside
              title="Sobremesas"
              alt="icone de bolo"
              href="./src/assets/bolo-icon.png"
            />
            <Aside
              title="Bebidas"
              alt="icone de refrigerante"
              href="./src/assets/refrigerante-icon.png"
            />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
