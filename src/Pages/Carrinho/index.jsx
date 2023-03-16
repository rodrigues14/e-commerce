import Button from 'Components/Button'
import ProdutoCardCarrinho from 'Components/ProdutoCardCarrinho'
import { useCarrinhoContext } from 'hook/useCarrinhoContext'
import React from 'react'
import styles from './Carrinho.module.css'
import iconVoltar from '../../assets/images/voltar.svg'
import { useNavigate } from 'react-router-dom'

export default function Carrinho() {
  const { carrinho } = useCarrinhoContext();
  const navigate = useNavigate();
  return (
    <section className={styles.container}>
      <div className={styles.carrinho}>
        <div>
          <div className={styles.cabecalhoCarrinho}>
            <button onClick={() => navigate('/')}>
              <img src={iconVoltar} alt="Ícone de voltar" />
            </button>
            <h1>Carrinho</h1>
          </div>
          {carrinho.map(produto => (
            <ProdutoCardCarrinho 
              key={produto.id}
              {...produto}
            />
          ))}
        </div>
        <div className={styles.infosPagamento}>
          <h3>Resumo do pedido</h3>
          <div>
            <p>Total:</p>
            <p>R$</p>
          </div>
          <Button>
            Finalizar compra
          </Button>
        </div>
      </div>
    </section>
  )
}
