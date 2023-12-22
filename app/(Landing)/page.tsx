import Link from 'next/link';
import localFont from 'next/font/local';
import { Medal } from 'lucide-react';
import { cn } from '@/lib/utils';

const headingFont = localFont({
  src: '../../public/fonts/font.woff2',
});

export default function LandingPage() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div
        className={cn(
          'flex items-center justify-center flex-col',
          headingFont.className
        )}
      >
        <div className='mb-4 flex items-center shadow-md p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
          <Medal className='h-6 w-6 mr-2' />
          No 1 task managment
        </div>
        <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
          Boardify helps team move
        </h1>
        <div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-4 rounded-md w-fit'>
          work forward.
        </div>
      </div>

      <Link
        href='/sign-up'
        className='mt-6 h-11 rounded-md px-8 leading-[44px] bg-primary text-primary-foreground hover:bg-primary/90 transition'
      >
        Get Boardify for free
      </Link>
    </div>
  );
}
