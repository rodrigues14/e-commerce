import styles from './Produto.module.css'
import React from 'react'

export default function Produto({ imagem, titulo, preco }) {
  return (
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
  )
}
