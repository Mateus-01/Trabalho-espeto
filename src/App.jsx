import { useState } from 'react'
import './index.css'
import Aside from './components/Aside'
import Header from './components/Header'
import Section from './components/Section'
import Produtos from './components/Produtos'
import './telaProduto.css'
import TelaProduto from './TelaProduto'

const espetosLista = [
  {
    nomeProduto: "Espeto de camarão",
    categoria: "Espeto",
    preco: "8.00",
    src: "/src/assets/espetos/img-prato-de-espeto-camarao.png",
    alt: "imagem de um espeto de linguiça"
  },
  {
    nomeProduto: "Espeto de carne",
    categoria: "Espeto",
    preco: "8.00",
    src: "/src/assets/espetos/img-prato-de-espeto-carne.png",
    alt: "imagem de um espeto de carne"
  },
  {
    nomeProduto: "Espeto de frango",
    categoria: "Espeto",
    preco: "8.00",
    src: "/src/assets/espetos/img-prato-de-espeto-frango.png",
    alt: "imagem de um espeto de frango"
  }
];

const sobremesaLista = [
  {
    nomeProduto: "Bolo de chocolate",
    categoria: "Sobremesas",
    preco: "7.00",
    src: "/src/assets/sobremesas/bolo-chocolate-mobile.png",
    alt: "imagem de um bolo de chocolate"
  },
  {
    nomeProduto: "Pudim de leite",
    categoria: "Sobremesas",
    preco: "12.00",
    src: "/src/assets/sobremesas/pudim-mobile.png",
    alt: "imagem de um pudim"
  }, {
    nomeProduto: "Cone trufado",
    categoria: "Sobremesas",
    preco: "10.00",
    src: "/src/assets/sobremesas/cone-trufado-mobile.png",
    alt: "imagem de um cone trufado"
  }
];

const bebidasLista = [
  {
    nomeProduto: "Fanta 2L",
    categoria: "bebidas",
    preco: "7.50",
    src: "/src/assets/bebidas/refri-fanta.png",
    alt: "imagem de uma fanta"
  },
  {
    nomeProduto: "Coca-Cola 1L",
    categoria: "bebidas",
    preco: "7.00",
    src: "/src/assets/bebidas/refri-coca.png",
    alt: "imagem dea coca-cola"
  }, {
    nomeProduto: "Pepsi",
    categoria: "bebidas",
    preco: "8.00",
    src: "/src/assets/bebidas/refri-pepsi.png",
    alt: "imagem de uma pepsi"
  }
];

function App() {
  return (
    <>
      <div className='desktop'>
      </div>

      <div className='mobile'>
      <TelaProduto/>
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
            title="Espetos"
          >
            {espetosLista.map(function (item) {
              return (
                <Produtos categoria={item.categoria} nomeProduto={item.nomeProduto} preco={item.preco} src={item.src} alt={item.alt} />
              );
            })}
          </Section>

          <Section
            title="Sobremesas"
          >
            {sobremesaLista.map(function (item) {
              return (
                <Produtos categoria={item.categoria} nomeProduto={item.nomeProduto} preco={item.preco} src={item.src} alt={item.alt} />
              );
            })}
          </Section>

          <Section
            title="Bebidas"
          >
            {bebidasLista.map(function (item) {

              return (
                <Produtos categoria={item.categoria} nomeProduto={item.nomeProduto} preco={item.preco} src={item.src} alt={item.alt} />
              );
            })}
          </Section>
        </main>
      </div>

    </>
  )
}

export default App
