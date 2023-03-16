import React from 'react'
import styles from './ProdutoCardCarrinho.module.css'

export default function ProdutoCardCarrinho({ imagem, titulo, preco }) {
  return (
    <div className={styles.produto}>
      <img src={imagem} alt={titulo} />
      <div className={styles.infoProduto}>
        <h2>{titulo}</h2>
        <p>{preco}</p>
        <div>Quantidades</div>
      </div>
    </div>
  )
}
