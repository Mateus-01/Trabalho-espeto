import { useState } from 'react'
import './index.css'
import Aside from './components/Aside'
import Header from './components/Header'
import Section from './components/Section'
import Produtos from './components/Produtos'
import './telaProduto.css'
import TelaFooter from './components/TelaFooter'
import TelaMain from './components/TelaMain';

const espetosLista = [
  {
    id: "e1",
    nomeProduto: "Espeto de camarão",
    categoria: "Espeto",
    preco: "8.00",
    src: "src/assets/espetos/img-prato-de-espeto-camarao.png",
    alt: "imagem de um espeto de linguiça",
    tamanho: "medio",
    preparo: "5 minutos",
    unidades: "1"
  },
  {
    id: "e2",
    nomeProduto: "Espeto de carne",
    categoria: "Espeto",
    preco: "8.00",
    src: "/src/assets/espetos/img-prato-de-espeto-carne.png",
    alt: "imagem de um espeto de carne",
    tamanho: "medio",
    preparo: "5 minutos",
    unidades: "1"
  },
  {
    id: "e3",
    nomeProduto: "Espeto de frango",
    categoria: "Espeto",
    preco: "8.00",
    src: "/src/assets/espetos/img-prato-de-espeto-frango.png",
    alt: "imagem de um espeto de frango",
    tamanho: "medio",
    preparo: "5 minutos",
    unidades: 1
  }
];
const sobremesaLista = [
  {
    id: "s1",
    nomeProduto: "Bolo de chocolate",
    categoria: "Sobremesas",
    preco: "7.00",
    src: "/src/assets/sobremesas/bolo-chocolate-mobile.png",
    alt: "imagem de um bolo de chocolate",
    tamanho: "pequeno",
    preparo: "5 minutos",
    unidades: 1
  },
  {
    id:"s2",
    nomeProduto: "Pudim de leite",
    categoria: "Sobremesas",
    preco: "12.00",
    src: "/src/assets/sobremesas/pudim-mobile.png",
    alt: "imagem de um pudim",
    tamanho: "pequeno",
    preparo: "5 minutos",
    unidades: 1
  },
  {
    id: "s3",
    nomeProduto: "Cone trufado",
    categoria: "Sobremesas",
    preco: "10.00",
    src: "/src/assets/sobremesas/cone-trufado-mobile.png",
    alt: "imagem de um cone trufado",
    tamanho: "pequeno",
    preparo: "5 minutos",
    unidades: 1
  }
];

const bebidasLista = [
  {
    id: "b1",
    nomeProduto: "Fanta 2L",
    categoria: "bebidas",
    preco: "7.50",
    src: "/src/assets/bebidas/refri-fanta.png",
    alt: "imagem de uma fanta",
    tamanho: "Medio",
    preparo: "5 minutos",
    unidades: 1
  },
  {
    id: "b2",
    nomeProduto: "Coca-Cola 1L",
    categoria: "bebidas",
    preco: "7.00",
    src: "src/assets/bebidas/refri-coca.png",
    alt: "imagem dea coca-cola",
    tamanho: "Pequeno",
    preparo: "5 minutos",
    unidades: 1
  }, {
    id: "b3",
    nomeProduto: "Pepsi 1.5L",
    categoria: "bebidas",
    preco: "8.00",
    src: "src/assets/bebidas/refri-pepsi.png",
    alt: "imagem de uma pepsi",
    tamanho: "Médio",
    preparo: "5 minutos",
    unidades: 1
  }
];

function App() {
  return (
    <>
      <div className='desktop'>
      </div>
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
              href="src/assets/bolo-icon.png"
            />
            <Aside
              title="Bebidas"
              alt="icone de refrigerante"
              href="src/assets/refrigerante-icon.png"
            />
          </div>
          <Section
            title="Espetos"
          >
            {espetosLista.map(function (item) {
              return (
                <div key={item.nomeProduto}>
                  <Produtos
                    id={item.id}
                    categoria={item.categoria}
                    nomeProduto={item.nomeProduto}
                    preco={item.preco}
                    src={item.src}
                    alt={item.alt}
                  />
                  {/* Adicionando o componente TelaMain com as propriedades necessárias */}
                  <TelaMain
                    id={item.id}
                    nomeProduto={item.nomeProduto}
                    preco={item.preco}
                    tamanho={item.tamanho}
                    tempoPreparo={item.preparo}
                    unidades={item.unidades}
                    src={item.src}
                    alt={item.alt}
                  />
                </div>
              );
            })}
          </Section>

          <Section
            title="Sobremesas"
          >
            {sobremesaLista.map(function (item) {
              return (
                <div key={item.nomeProduto}>
                  <Produtos
                    id={item.id}
                    categoria={item.categoria}
                    nomeProduto={item.nomeProduto}
                    preco={item.preco}
                    src={item.src}
                    alt={item.alt}
                  />
                  {/* Adicionando o componente TelaMain com as propriedades necessárias */}
                  <TelaMain
                    id={item.id}
                    nomeProduto={item.nomeProduto}
                    preco={item.preco}
                    tamanho={item.tamanho}
                    tempoPreparo={item.preparo}
                    unidades={item.unidades}
                    src={item.src}
                    alt={item.alt}
                  />
                </div>
              );
            })}
          </Section>

          <Section
            title="Bebidas"
          >
            {bebidasLista.map(function (item) {
              return (
                <div key={item.nomeProduto}>
                  <Produtos
                    id={item.id}
                    categoria={item.categoria}
                    nomeProduto={item.nomeProduto}
                    preco={item.preco}
                    src={item.src}
                    alt={item.alt}
                  />
                  {/* Adicionando o componente TelaMain com as propriedades necessárias */}
                  <TelaMain
                    id={item.id}
                    nomeProduto={item.nomeProduto}
                    preco={item.preco}
                    tamanho={item.tamanho}
                    tempoPreparo={item.preparo}
                    unidades={item.unidades}
                    src={item.src}
                    alt={item.alt}
                  />
                </div>
              );
            })}
          </Section>
        </main>
      </div>
    </>
  )
}
export default App

