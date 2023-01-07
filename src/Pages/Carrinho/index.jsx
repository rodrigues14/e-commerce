import ProdutoCard from 'Components/ProdutoCard'
import React from 'react'
import styles from './Carrinho.module.css'

export default function Carrinho() {
  return (
    <section className={styles.container}>
      <ProdutoCard
        id="5"
        imagem="https://github.com/rodrigues14.png"
        preco="R$ 350,00"
        titulo="Teste Teste"
      />
    </section>
  )
}
