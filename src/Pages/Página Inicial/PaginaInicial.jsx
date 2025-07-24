import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Sidenav from '../../Components/Sidenav/Sidenav';
import Footer from '../../Components/Footer/Footer';
import styles from './PaginaInicial.module.css';
import Graph from '@mui/icons-material/EqualizerRounded';
import alunosData from '../../alunos.json'

export default function Inicio() {
  const location = useLocation();
  const username = localStorage.getItem("username");

  useEffect(() => {
    document.title = "Página Inicial | Portal do Aluno";
  }, [location]);

  const aluno = alunosData.alunos.find((aluno) => aluno.nome === username.trim());

  return (
    <section className={styles.container}>
      <Header/>
      <Sidenav/>
      <main className={styles.main}>
        <div className={styles.background}>
        <div className={styles.mainWrapper}>
          <h1>Página Inicial</h1>
          <hr></hr>
          <div className={styles.studentId}>
            <h2>Olá <span>{username.trim()},</span></h2>
            {aluno && (<h2>Matrícula: <span>{aluno.matricula}</span></h2>)}
          </div>
          <h3>Lembretes</h3>
          <div className={styles.box}>
            <div className={styles.boxTitle}>Finanças</div>
            <div className={styles.boxInfo}>Nenhuma cobrança em aberto</div>
          </div>
          <div className={styles.box}>
            <div className={styles.boxTitle}>Frequência</div>
            <div className={styles.boxInfo}>Nenhuma ausência registrada</div>
          </div>
          <div className={styles.box}>
            <div className={styles.boxTitle}>Comunicados</div>
            <div className={styles.boxMsg}>Próxima sexta-feira não haverá aula</div>
            <div className={styles.boxMsg}>Semana que vem começará as provas de Português</div>
          </div>
          <h3>Avaliações</h3>
          <div className={styles.gradeBox}>
            <Graph sx={{ fontSize: 50 }}/>
            <span>Aguarde a liberação de suas notas nos simulados</span>
          </div>
        </div>
        </div>
      </main>
      <Footer/>
    </section>
  );
}

