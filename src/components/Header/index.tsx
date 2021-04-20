import React from 'react';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR'
import styles from './styles.module.scss';

const Header: React.FC = () => {
  const currentData = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  })

  return (
    <header className={styles.headerContainer}>
      <img src='/logo.svg' alt='Podcastr' />
      <p>O melhor para você ouvir, sempre</p>
      <span>{currentData}</span>
    </header>
  );
}

export default Header;