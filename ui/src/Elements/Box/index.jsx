import { twMerge } from 'tailwind-merge';
import React from 'react';

export default function Box({
  variant,
  component,
  utilities,
  children,
  className = '',
  ...rest
}) {
  const variants = {
    'card-footer': 'lg:flex lg:justify-between lg:items-center',
    'profileicon-input':
      'lg:flex lg:items-center lg:py-[0px] lg:px-[10px] lg:rounded-[4px] lg:gap-x-[2px] lg:border-[1px] lg:border-solid lg:border-[rgb(206, 210, 217)]',
    'copy-input': 'lg:flex lg:items-center lg:gap-[10px]',
  };
  const buttonClass = variants[variant] || variants['variant0'];

  const validContainerElements = [
    'div',
    'span',
    'p',
    'header',
    'footer',
    'main',
    'article',
    'section',
    'nav',
    'aside',
  ];

  const Component = validContainerElements.includes(component)
    ? component
    : 'div';

  return (
    <Component className={twMerge(buttonClass, utilities, className)} {...rest}>
      {children}
    </Component>
  );
}
