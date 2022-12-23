import React from 'react'
import styles from './Header.module.css'
import cart from '../../assets/images/cart.svg'
import logo from '../../assets/images/logo.svg'
import lupa from '../../assets/images/lupa.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="Logo" />
      
      <div>
        <input type="text" />
        <button><img src={lupa} alt="Buscar" /></button>
      </div>

      <img className={styles.carrinho} src={cart} alt="Carrinho" />
    </header>
  )
}
