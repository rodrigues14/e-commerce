import styles from './ProdutoCard.module.css'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'Components/Button';

function ProdutoCard({ imagem, titulo, preco, id }) {
  const navigate = useNavigate();
  return (
      <div className={styles.boxProduto}>
        <img
          src={imagem}
          alt={titulo}
        />
        <div className={styles.detalhes}>
          <h1>{titulo}</h1>
          <h2>R$ {Number(preco).toFixed(2)}</h2>
        </div>
        <div className={styles.containerButton}>
          <Button onClick={() => navigate(`/produtos/${id}`)}>Detalhes</Button>
        </div>
      </div>
  )
}

export default memo(ProdutoCard);