import { OpenInV0Button } from '@/components/open-in-v0-button';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/registry/base/button';

const Page = () => {
  return (
    <div className='mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8'>
      <div className='absolute right-5 top-5 size-7'>
        <ModeToggle />
      </div>
      <header className='flex flex-col gap-1'>
        <h1 className='text-3xl font-bold tracking-tight'>Custom Registry</h1>
        <p>A custom registry for distribution code using shadcn.</p>
      </header>
      <main className='flex flex-1 flex-col gap-8'>
        <div className='relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='text-sm sm:pl-3'>A basic button</h2>
            <OpenInV0Button name='button' className='w-fit' />
          </div>
          <div className='relative flex min-h-[400px] items-center justify-center'>
            <Button>Click me</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
