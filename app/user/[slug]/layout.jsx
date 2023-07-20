export const metadata = {
  title: 'Информация о пользоватяле',
  description: 'Информация о пользоватяле',
}

export default function RootLayout({ children }) {
  return (
     <html lang="ru">
       <body>{children}</body>
     </html>
   )
 }