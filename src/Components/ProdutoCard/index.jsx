import styles from './ProdutoCard.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ProdutoCard({ imagem, titulo, preco, id }) {
  return (
    <Link to={`/produtos/${id}`}>
      <div className={styles.boxProduto}>
        <img 
          src={imagem} 
          alt={titulo} 
        />
        <div>
          <h1>{titulo}</h1>
          <h2>{preco}</h2>
        </div>
      </div>
    </Link>
  )
}
