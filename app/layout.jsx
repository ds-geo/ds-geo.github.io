import '../globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


export const metadata = {
 title: 'Damita George Portfolio',
 description: 'Welcome to my website',
};


export default function RootLayout({ children }) {
 return (
   <html lang="en" className="scroll-smooth">
     <body className="bg-purple-100 text-purple lowercase">
       <Header />
       <main className="min-h-screen px-8 py-4">
         {children}
       </main>
       <Footer />
     </body>
   </html>
 );
}
