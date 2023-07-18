export const metadata = {
  title: 'Список заявок',
  description: 'Список заявок',
}

export default function RootLayout({ children }) {
  return (
     <html lang="en">
       <body>{children}</body>
     </html>
   )
 }