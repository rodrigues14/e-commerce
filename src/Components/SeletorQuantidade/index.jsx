import React from 'react'
import styles from './SeletorQuantidade.module.css'
import iconAdd from '../../assets/images/adicionar.svg'
import iconRemover from '../../assets/images/remover.svg'
import { useCarrinhoContext } from 'hook/useCarrinhoContext';

export default function SeletorQuantidade({ id, produto }) {
  const { carrinho, AdicionarProduto, removerProduto } = useCarrinhoContext();
  const produtoNoCarrinho = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);
  
  return (
    <div className={styles.itemQuantidade}>
          <button 
            className={styles.remover}
            onClick={() => removerProduto(id)}
            disabled={!produtoNoCarrinho}
          >
            <span>
              <img src={iconRemover} alt="Remover" />
            </span>
          </button>
          <div className={styles.boxQuantidade}>
            <span>{produtoNoCarrinho?.quantidade || 0}</span>
          </div>

          <button 
            className={styles.adicionar} 
            onClick={() => AdicionarProduto(produto)}
          >
            <span>
              <img src={iconAdd} alt="Adicionar" /></span>
          </button>
        </div>
  )
}
