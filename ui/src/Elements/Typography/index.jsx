import React from 'react';
import { twMerge } from 'tailwind-merge';

const variantTypeMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  subtitle: 'span',
  body1: 'p',
  heading: 'h2',
  subHeading: 'h3',
};

export default function Typography({
  variantType = 'span',
  component,
  variant,
  utilities,
  className = '',
  children,
  ...rest
}) {
  const variants = {
    'card-body': 'lg:text-[14px] lg:font-rubik',
    'card-footer-data': 'lg:text-[#90959dff]',
    'table-head-main':
      'lg:overflow-hidden lg:whitespace-no-wrap lg:max-w-[230px] lg:w-[100%]',
    'card-head-p': 'lg:cursor-pointer',
    'redirect-space': 'lg:whitespace-no-wrap lg:text-[#090b0e]',
    'settings-listitem': 'lg:text-[14px] lg:text-[#090b0e]',
    'overview-card-head': 'lg:text-[#090b0e] lg:text-[13px] lg:font-[400]',
    'overview-card-data': 'lg:text-[#005dffff] lg:text-[14px]',
    'following-card':
      'lg:whitespace-no-wrap lg:overflow-hidden lg:text-[16px] lg:leading-[16px]',
    'follow-cards-head':
      'lg:text-[#090b0e] lg:whitespace-no-wrap lg:overflow-hidden lg:text-[16px] lg:flex-grow',
  };
  const buttonClass = variants[variant] || variants['variant0'];

  const Component =
    component || variantTypeMapping[variantType || 'body1'] || 'span';

  return (
    <Component
      className={twMerge('m-0', buttonClass, utilities, className)}
      {...rest}>
      {children}
    </Component>
  );
}
