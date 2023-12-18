import { ModeToggle } from '@/components/mode-toggle';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main className=''>
      <ModeToggle />
      <UserButton afterSignOutUrl='/' />
    </main>
  );
}
