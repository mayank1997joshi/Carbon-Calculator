import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({
  children,
  utilities,
  variant = 'filled',
  className = '',
  onClick,
  ...rest
}) => {
  const variants = {
    'integration-btn':
      'lg:bg-[#ffffffff] lg:border-[1px] lg:border-solid lg:border-[rgb(206, 210, 217)] lg:py-[8px] lg:px-[12px] lg:items-center lg:font-[600] lg:text-[14px] lg:justify-center lg:gap-[10px]',
    'collection-table-btn':
      'lg:bg-[#ced2d9] lg:max-w-[150px] lg:text-[13px] lg:text-[#090b0e] lg:py-[4px] lg:px-[8px] lg:border-none',
    'group-tab-btn':
      'lg:bg-[black] lg:font-[600] lg:py-[8px] lg:px-[13px] lg:items-center lg:whitespace-no-wrap lg:justify-center lg:text-[14px]',
    'sync-btn':
      'lg:bg-[#ffffffff] lg:gap-[10px] lg:items-center lg:justify-center lg:w-[100%] lg:py-[8px] lg:px-[12px]',
    'copy-btn':
      'lg:bg-[#005dffff] lg:border-[1px] lg:border-solid lg:border-[rgb(0, 93, 255)] lg:text-[#ffffffff] lg:py-[8px] lg:px-[12px] lg:text-[14px] lg:font-[600]',
    'btn-out-line':
      'lg:bg-[transparent] lg:border-[1px] lg:border-solid lg:border-[rgb(206, 210, 217)] lg:flex lg:items-center lg:justify-center lg:whitespace-no-wrap lg:p-[8px] lg:text-[#525a66ff] lg:rounded-[4px] lg:text-[14px] lg:font-[600]',
  };
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <button
      type="button"
      className={twMerge(
        'flex gap-[8px] border-none rounded-[5px] cursor-pointer bg-[#0074f0] text-[#ffffff] px-[10px] py-[8px] hover:bg-gradient-to-r hover:from-black-10 active:bg-gradient-to-r active:from-white-20',
        buttonClass,
        utilities,
        className
      )}
      onClick={onClick}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
