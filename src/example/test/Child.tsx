import type { IFirst } from '@/types/types';

export interface ChildProps {
  data: IFirst[];
  children: React.ReactNode
}


function Child({ data }: ChildProps) {
  console.log('child component rerender');

  return (
    <div>
      <h1>Child Component</h1>
      <button >Click</button>
    </div>
  );
}

export default Child;
