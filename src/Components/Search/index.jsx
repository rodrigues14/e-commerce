import React from 'react'
import styles from './Search.module.css'
import lupa from '../../assets/images/lupa.svg'

export default function Search() {
  return (
    <div className={styles.search}>
      <input type="text" />
      <button><img src={lupa} alt="Buscar" /></button>
    </div>
  )
}
