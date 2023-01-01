import React from 'react'
import styles from './Search.module.css'
import lupa from '../../assets/images/lupa.svg'

export default function Search({ value, onChange }) {
  return (
    <div className={styles.search}>
      <input
       type="text"
       value={value}
       onChange={onChange}
      />
      <button><img src={lupa} alt="Buscar" /></button>
    </div>
  )
}
