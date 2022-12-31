import React from 'react'
import styles from './InputQuantidade.module.css'

export default function InputQuantidade() {
  return (
    <div className={styles.inputQuantidade}>
      <label htmlFor="quantidade">Quantidade</label>
      <input type="number" name="quantidade" id="quantidade" />
    </div>
  )
}
