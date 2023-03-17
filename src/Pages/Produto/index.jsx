import React from 'react'
import styles from './Produto.module.css'
import { useParams } from 'react-router-dom'
import produtos from '../../json/produtos.json'
import SeletorQuantidade from 'Components/SeletorQuantidade'
import ButtonVoltar from 'Components/ButtonVoltar'

export default function Produto() {
  const parametros = useParams()

  const produto = produtos.find((produto) => {
    return produto.id === Number(parametros.id)
  })

  return (
    <div className={styles.container}>
      <div className={styles.cabecalhoProduto}>
        <ButtonVoltar />
        <h1>Detalhes do produto</h1>
      </div>
      <div className={styles.produto}>
        <img src={`/assets/produtos/${produto.id}/camisa${produto.id}.jpeg`} alt={produto.titulo} />
        <div>
          <div>
            <h1>{produto.titulo}</h1>
            <h2>{produto.preco}</h2>
          </div>
          <div>
            <p className={styles.addAoCarrinho}>Adicionar ao carrinho</p>
            <SeletorQuantidade
              id={produto.id}
              produto={produto}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
