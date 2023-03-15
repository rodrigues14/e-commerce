import React from 'react'
import styles from './Header.module.css'
import cart from '../../assets/images/cart.svg'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { useCarrinhoContext } from 'hook/useCarrinhoContext'

export default function Header() {
  const { quantidadeProduto } = useCarrinhoContext();
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Logo" />
      </Link>

      <Link to="/carrinho">
        <div className={styles.containerCarrinho}>
          <img className={styles.carrinho} src={cart} alt="Carrinho" />
          <div  
            className={styles.contador} 
            aria-label='Quantidade de produto no carrinho'
            style={quantidadeProduto === 0 ? {display: 'none'} : {}}
          >
            <p>{quantidadeProduto}</p>
          </div>
        </div>
      </Link>
    </header>
  )
}
