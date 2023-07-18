import './globals.css';

export const metadata = {
  title: 'Список пользователей',
  description: 'Список пользователей',
}

 
export default function RootLayout({ children }) {
 return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
