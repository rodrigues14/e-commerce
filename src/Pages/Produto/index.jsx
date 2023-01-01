import React from 'react'
import styles from './Produto.module.css'
import { useParams } from 'react-router-dom'
import produtos from '../../json/produtos.json'
import InputQuantidade from 'Components/InputQuantidade'
import Button from 'Components/Button'

export default function Produto() {
  const parametros = useParams()

  const produto = produtos.find((produto) => {
    return produto.id === Number(parametros.id)
  })

  return (
    <div className={styles.container}>
      <img src={`/assets/produtos/${produto.id}/camisa${produto.id}.jpeg`} alt={produto.titulo} />
      <div>
        <div>
          <h1>{produto.titulo}</h1>
          <h2>{produto.preco}</h2>
        </div>
        <div>
          <InputQuantidade />
          <Button>
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </div>
  )
}
