import React from 'react'
import styles from './Inicio.module.css'
import ProdutoCard from 'Components/ProdutoCard'
import produtos from '../../json/produtos.json'

export default function Inicio() {
  return (
    <>
      <section className={styles.container}>
        {produtos.map((produto) => {
          return <ProdutoCard 
            {...produto}
            key={produto.id} 
          />
        })}
      </section>
    </>
  )
}
