import Button from 'Components/Button'
import ButtonVoltar from 'Components/ButtonVoltar'
import ProdutoCardCarrinho from 'Components/ProdutoCardCarrinho'
import { useCarrinhoContext } from 'hook/useCarrinhoContext'
import React from 'react'
import styles from './Carrinho.module.css'

export default function Carrinho() {
  const { carrinho, valorTotalCarrinho } = useCarrinhoContext();
  return (
    <section className={styles.container}>
      <div className={styles.carrinho}>
        <div className={styles.produtoCabecalho}>
          <div className={styles.cabecalhoCarrinho}>
            <ButtonVoltar />
            <h1>Carrinho</h1>
          </div>
          {carrinho.map(produto => (
            <ProdutoCardCarrinho 
              key={produto.id}
              {...produto}
            />
          ))}
          <h2>{carrinho.length === 0 && "O carrinho está vazio! 😢"}</h2>
        </div>
        <div className={styles.infosPagamento}>
          <h3>Resumo do pedido</h3>
          <div>
            <p>Total:</p>
            <p>R$ {valorTotalCarrinho.toFixed(2)}</p>
          </div>
          <div className={styles.containerButton}>
            <Button disabled={true}>
              Finalizar compra
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
