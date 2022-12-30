import React from 'react'
import styles from './Inicio.module.css'
import Produto from 'Components/Produto'
import produtos from '../../json/produtos.json'

export default function Inicio() {
  return (
    <>
      <section className={styles.container}>
        {produtos.map((produto) => {
          return <Produto 
            {...produto}
            key={produto.id} 
          />
        })}
      </section>
    </>
  )
}
