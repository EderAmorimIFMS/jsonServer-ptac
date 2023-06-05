'use client'

import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'


export default function Cadastro() {

    const route = useRouter();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [num_inscricao, setNum_inscricao] = useState();


    const cadastrar = (e) => {
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            num_inscricao: num_inscricao
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3000/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }
    return (
        <div className={styles.main}>

            <h1 className={styles.h1}>Cadastrar</h1>

            <form action='' onSubmit={cadastrar}>
            
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>
                     Cadastrar
                    </legend>

                <input placeholder='Informe o nome do aluno.' nome="nome" type="text"
                    onChange={e => setNome(e.target.value)} className={styles.inputtext}></input><br/>

                
                <input placeholder='Informe o curso.' nome="curso" type="text"
                    onChange={e => setCurso(e.target.value)} className={styles.inputtext}></input><br/>

                <input placeholder='Informe o Nº de inscrição.' nome="num_inscricao" type="number"
                    onChange={e => setNum_inscricao(e.target.value)} className={styles.inputtext}></input><br/>

       
                <a className={styles.text} href='/'>Voltar</a>
                <button type='submit' className={styles.button}>CADASTRAR</button>
  
                </fieldset>
            </form>
        </div>

    );

}
