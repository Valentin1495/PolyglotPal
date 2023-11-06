import Link from 'next/link';
import SignInButton from './sign-in-button';
import { ModeToggle } from './mode-toggle';

export default function Header() {
  return (
    <header className='flex itmes-center justify-between px-5 py-8'>
      <Link href='/' prefetch={false} className='font-bold text-lg'>
        Polyglot<span className='text-primary'>Pal</span>
      </Link>
      <nav className='flex items-center gap-x-0.5'>
        <SignInButton />
        <ModeToggle />
      </nav>
    </header>
  );
}
