import { useState } from 'react'
import './index.css'
import Aside from './components/Aside'
import Header from './components/Header'

const espetosLista = [
  {
    href: "https://www.instagram.com/mateus_f.d.s/?next=%2F",
    src: "/src/assets/espetos/espeto-carne-mobile.png",
    alt: "icone instagram",
  },
  {
    href: "https://twitter.com/MateusMamani",
    src: "/src/assets/espetos/espeto-frango-mobile.png",
    alt: "icone twitter",
  },
  {
    href: "https://github.com/Mateus-01",
    src: "/src/assets/espetos/espeto-linguica-mobile.png",
    alt: "icone github",
  },
];

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
          <Section
            className="cate-espeto"
            title="Espetos"
          >
            {espetosLista.map(function (item) {
              return (
                <Produtos href={item.href} src={item.src} alt={item.alt} />
              );
            })}
          </Section>
          <Section
            className="cate-espeto"
            title="Sobremesas"
          >
            {/* {socialListData.map(function (item) {
              return (
                <ListaDeItens href={item.href} src={item.src} alt={item.alt} />
              );
            })} */}
          </Section>
          <Section
            className="cate-espeto"
            title="Bebidas"
          >
            {/* {socialListData.map(function (item) {
              return (
                <ListaDeItens href={item.href} src={item.src} alt={item.alt} />
              );
            })} */}
          </Section>
        </main>
      </div>
    </>
  )
}

export default App
