import React from 'react';

interface H5Props extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

export function H5({ children, className = '', ...props }: H5Props) {
  return (
    <h5
      className={`text-[18px] leading-[28px] font-black uppercase text-white italic ${className}`}
      {...props}
    >
      {children}
    </h5>
  );
}
