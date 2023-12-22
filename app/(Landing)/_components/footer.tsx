import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <div className='flex items-center justify-end fixed bottom-0 w-full p-4 border-t bg-slate-100'>
      <Button size='sm' variant='ghost'>
        Privacy Policy
      </Button>
      <Button size='sm' variant='ghost'>
        Terms of Service
      </Button>
    </div>
  );
}
