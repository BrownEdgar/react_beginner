import { type ReactNode } from 'react';
import './Card.scss';

export interface CardProps {
  children?: ReactNode;
  title?: string;
  theme?: 'light' | 'dark';
}

export default function Card({ children, title, theme = 'light' }: CardProps) {
  return (
    <div className={`Card Card__${theme}`}>
      {title && <h1 className='Card__title'>{title}</h1>}
      {children}
    </div>
  );
}
