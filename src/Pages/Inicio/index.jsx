import React, { useMemo, useState } from 'react'
import styles from './Inicio.module.css'
import ProdutoCard from 'Components/ProdutoCard'
import produtos from '../../json/produtos.json'
import Search from 'Components/Search'

export default function Inicio() {
  const [busca, setBusca] = useState('')
  
  const produtosFiltrados = useMemo(() => {
    const lawerBusca = busca.toLowerCase()
    return produtos.filter((produto) => produto.titulo.toLowerCase().includes(lawerBusca))
  }, [busca])

  return (
    <section>
      <div className={styles.buscar}>
        <Search
        value={busca}
          onChange={(evento) => {
            setBusca(evento.target.value)
          }}
        />
      </div>
      <div className={styles.produtos}>
        {produtosFiltrados.map((produto) => {
          return <ProdutoCard
            {...produto}
            key={produto.id}
          />
        })}
      </div>
    </section>
  )
}
