import React from 'react'
import styles from './Header.module.css'
import cart from '../../assets/images/cart.svg'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Logo" />
      </Link>

      <Link to="/carrinho">
        <img className={styles.carrinho} src={cart} alt="Carrinho" />
      </Link>
    </header>
  )
}
