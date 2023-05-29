"use client"
import { useRouter } from 'next/navigation';
import styles from './page.module.css'
import Link from 'next/link';

export default async function Home() {
  const router = useRouter();
  const req = await fetch("http://localhost:3004/alunos", {
    cache: "no-cache"
  });

  const alunos = await req.json();
 
  const remover = async (id) => {
    try {
      await fetch("http://localhost:3004/alunos/" + id, {
        method: "DELETE"
      })
      router.refresh()
    } catch {
      alert.arguments("Não foi possivél remover!")
    }
  }
  return (
    <main className={styles.main}>

    <h1 className={styles.h1}>Alunos Cadastrados</h1>

      <Link href="/cadastro">CADASTRAR</Link>

   <div className={styles.container}>

      {alunos.map(aluno => (
        <div key={aluno.id} className={styles.card}>
          <p className={styles.p}>{aluno.nome}</p>
          <p className={styles.p}>{aluno.curso}</p>
          <button onClick={e => e.preventDefault(remover(aluno.id))} className={styles.button}>REMOVER</button>
        </div>
      ))}
    </div>
    </main>
  )
}
