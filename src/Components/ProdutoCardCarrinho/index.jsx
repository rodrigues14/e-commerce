import SeletorQuantidade from 'Components/SeletorQuantidade'
import React from 'react'
import styles from './ProdutoCardCarrinho.module.css'

export default function ProdutoCardCarrinho({ imagem, titulo, preco, id }) {
  return (
    <div className={styles.produto}>
      <img src={imagem} alt={titulo} />
      <div className={styles.infoProduto}>
        <h2>{titulo}</h2>
        <p>R$ {Number(preco).toFixed(2)}</p>
        <SeletorQuantidade
          id={id}
          produto={{ imagem, titulo, preco, id }}
        />
      </div>
    </div>
  )
}
