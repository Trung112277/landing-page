import React from 'react';

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

export function H2({ children, className = '', ...props }: H2Props) {
  return (
    <h2
      className={`text-[32px] leading-[48px] font-black uppercase text-primary italic mb-2 ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}
