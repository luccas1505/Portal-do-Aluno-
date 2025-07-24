import React from "react";
import { Link } from "react-router-dom";
import AccountIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from './Header.module.css'

export default function Header() {
  const username = localStorage.getItem("username");

  return (
    <header>
      <nav>
        <div className={styles.userInfo}>
          <AccountIcon sx={{ fontSize: 40 }} />
          <span>{username}</span>
        </div>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="logo" width="40" />
          <span>Portal do Aluno</span>
        </div>
        <Link title='Sair' to="/">
            <span>Sair</span>
            <LogoutIcon sx={{ fontSize: 30 }} />
        </Link>
      </nav>
    </header>
  );
}