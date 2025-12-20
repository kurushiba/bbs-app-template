import './globals.css';
import Header from './Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body>
        <Header />
        <main className='container' style={{ padding: '40px 20px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
