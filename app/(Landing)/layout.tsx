import { ReactNode } from 'react';
import { Navbar } from './_components/navbar';
import Footer from './_components/footer';

export default function LandingPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className='min-h-screen bg-slate-100'>
      <main className='pt-40 pb-20 bg-slate-100'>
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  );
}
