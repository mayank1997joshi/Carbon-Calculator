import { twMerge } from 'tailwind-merge';
import React from 'react';

export default function Link({
  variant,
  utilities,
  children,
  className = '',
  href = '#',
  target,
  rel,
  ...rest
}) {
  const variants = {
    'sidebar-list':
      'lg:flex lg:w-[100%] lg:items-center lg:gap-[10px] lg:no-underline',
  };
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <a
      href={href}
      rel={rel}
      target={target}
      className={twMerge(buttonClass, utilities, className)}
      {...rest}>
      {children}
    </a>
  );
}
