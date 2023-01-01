import React from 'react'
import styles from './Inicio.module.css'
import ProdutoCard from 'Components/ProdutoCard'
import produtos from '../../json/produtos.json'
import Search from 'Components/Search'

export default function Inicio() {
  return (
    <>
      
      <section>
        <div className={styles.buscar}>
          <Search />
        </div>
        <div className={styles.produtos}>
          {produtos.map((produto) => {
            return <ProdutoCard 
              {...produto}
              key={produto.id} 
            />
          })}
        </div>
      </section>
    </>
  )
}
