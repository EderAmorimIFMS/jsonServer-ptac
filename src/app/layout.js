import { Inter } from 'next/font/google';
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Projeto aula',
  description: 'Simulando consumo de api com JsonServer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={styles.body}>
        {children}
      </body>
    </html>
  )
}
