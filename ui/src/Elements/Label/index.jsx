import { twMerge } from 'tailwind-merge';
import React from 'react';

export default function Label({
  variant,
  utilities,
  children,
  className = '',
  name,
  htmlFor = 'label',
  ...rest
}) {
  const variants = {
    'signin-label': 'lg:text-[14px] lg:font-[bold] lg:w-[fit-content]',
    'signup-label': 'lg:text-[14px] lg:font-[600] lg:w-[fit-content]',
    'profile-label': 'lg:w-[fit-content] lg:text-[14px] lg:font-[600]',
  };
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <label
      name={name}
      htmlFor={htmlFor}
      className={twMerge(buttonClass, utilities, className)}>
      {children}
    </label>
  );
}
