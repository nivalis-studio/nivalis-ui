import { cn } from '@/lib/classnames';
import { Index } from '@/registry/__index__';

type Props = {
  name: string;
};

export const ComponentPreview = ({ name, ...props }: Props) => {
  const Component = Index[name]?.component;

  if (!Component) {
    return (
      <p className='font-sans text-sm'>
        Component{' '}
        <code className='relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm'>
          {name}
        </code>{' '}
        not found in registry.
      </p>
    );
  }

  return (
    <div>
      <div
        className={cn(
          'preview flex h-[450px] w-full items-center justify-center overflow-y-auto p-10 max-sm:px-6',
        )}
      >
        <Component {...props} />
      </div>
    </div>
  );
};
