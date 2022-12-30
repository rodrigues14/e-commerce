import React from 'react'
import styles from './Footer.module.css'
import facebook from '../../assets/images/fb.png'
import instagram from '../../assets/images/ig.png'
import twitter from '../../assets/images/tw.png'

export default function Rodape() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>E-commerce desenvolvido por Lucas Rodrigues</p>
        <p>Copyright - 2022</p>
      </div>
      <div>
        <a href="https://facebook.com">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://instagram.com">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://twitter.com">
          <img src={twitter} alt="Twitter" />
        </a>
      </div>
    </footer>
  )
}
