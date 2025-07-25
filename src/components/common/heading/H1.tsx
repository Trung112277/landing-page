import React from 'react';

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

export function H1({ children, className = '', ...props }: H1Props) {
  return (
    <h1 className={`text-4xl font-bold uppercase ${className}`} {...props}>
      {children}
    </h1>
  );
}
  