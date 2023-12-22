import Link from 'next/link';
import Logo from '@/components/logo';

export const Navbar = () => {
  return (
    <div className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center'>
      <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
        <Logo />

        <Link
          href='/sign-in'
          className='border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-1 transition'
        >
          Login
        </Link>
      </div>
    </div>
  );
};
