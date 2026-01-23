import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({ className, hover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white p-6 shadow-md',
        hover && 'transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
