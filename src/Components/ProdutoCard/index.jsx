import styles from './ProdutoCard.module.css'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import iconAdd from '../../assets/images/adicionar.svg'
import iconRemover from '../../assets/images/remover.svg'
import { useCarrinhoContext } from 'hook/useCarrinhoContext'

function ProdutoCard({ imagem, titulo, preco, id }) {
  const { carrinho, AdicionarProduto } = useCarrinhoContext();
  const produtoNoCarrinho = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);

  return (
    <div className={styles.boxProduto}>
      <Link to={`/produtos/${id}`}>
        <img
          src={imagem}
          alt={titulo}
        />
      </Link>
      <div>
        <h1>{titulo}</h1>
        <h2>{preco}</h2>
        <div className={styles.itemQuantidade}>
          <button className={styles.remover}>
            <span>
              <img src={iconRemover} alt="Remover" />
            </span>
          </button>
          <div className={styles.boxQuantidade}>
            <span>{produtoNoCarrinho?.quantidade || 0}</span>
          </div>

          <button 
            className={styles.adicionar} 
            onClick={() => AdicionarProduto({ imagem, titulo, preco, id })}
          >
            <span>
              <img src={iconAdd} alt="Adicionar" /></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default memo(ProdutoCard);