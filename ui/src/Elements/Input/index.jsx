import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Input({
  className = '',
  type,
  variant = 'filled',
  utilities,
  value: propValue,
  onChange: propOnChange,
  ...rest
}) {
  const variants = {
    'signin-input':
      'lg:p-[8px] lg:bg-[#ffffffff] lg:border-[1px] lg:border-solid lg:border-[rgb(206, 210, 217)] lg:w-[100%] lg:text-[14px]',
    'profile-input': 'lg:bg-[#ffffffff] lg:w-[100%] lg:text-[14px] lg:p-[10px]',
    'profileicon-input':
      'lg:bg-[#ffffffff] lg:border-none lg:text-[14px] lg:p-[10px] lg:flex-grow',
  };
  const buttonClass = variants[variant] || variants['variant0'];

  const [value, setValue] = React.useState(propValue || '');

  const handleChange = (e) => {
    const { value: eventValue } = e.target;
    setValue(eventValue);

    if (propOnChange) {
      propOnChange(e);
    }
  };

  return (
    <input
      className={twMerge(
        'w-[300px] p-[8px] border border-gray-300 rounded-[4px] outline-none text-base',
        buttonClass,
        className,
        utilities
      )}
      type={type}
      value={propValue !== undefined ? propValue : value}
      onChange={handleChange}
      {...rest}
    />
  );
}
