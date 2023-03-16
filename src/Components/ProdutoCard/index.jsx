import styles from './ProdutoCard.module.css'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import SeletorQuantidade from 'Components/SeletorQuantidade'

function ProdutoCard({ imagem, titulo, preco, id }) {
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
        <div className={styles.boxSeletorQuantidade}>
          <SeletorQuantidade 
            id={id}
            produto={{ imagem, titulo, preco, id }}
          />
        </div>
      </div>
      
    </div>
  )
}

export default memo(ProdutoCard);