import styles from './ProdutoCard.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import iconAdd from '../../assets/images/adicionar.svg'
import iconRemover from '../../assets/images/remover.svg'

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
          <div className={styles.itemQuantidade}>
            <button className={styles.remover}>
              <span>
                <img src={iconRemover} alt="Remover" /> 
              </span>
            </button>
            <div className={styles.boxQuantidade}>
              <span>1</span>
            </div>

            <button className={styles.adicionar}>
              <span>
                <img src={iconAdd} alt="Adicionar" /></span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
