import React from 'react';

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

export function H2({ children, className = '', ...props }: H2Props) {
  return (
    <h2
      className={`md:text-[32px] sm:text-2xl text-xl leading-[32px] md:leading-[48px] font-black uppercase text-primary italic mb-2 line-clamp-1 tracking-[-2px] md:tracking-normal ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}
