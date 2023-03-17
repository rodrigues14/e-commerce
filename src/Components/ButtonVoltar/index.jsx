import React from 'react'
import { useNavigate } from 'react-router-dom';
import iconVoltar from '../../assets/images/voltar.svg'
import styles from './ButtonVoltar.module.css'

export default function ButtonVoltar() {
  const navigate = useNavigate();
  return (
    <button className={styles.buttonVoltar} onClick={() => navigate(-1)}>
      <img src={iconVoltar} alt="Ícone de voltar" />
    </button>
  )
}
