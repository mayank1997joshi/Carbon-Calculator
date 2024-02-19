import React from 'react';
import { twMerge } from 'tailwind-merge';
import { createStyles } from '@mantine/styles';

const useColumnContainerStyles = createStyles(() => ({
  columnContainer: {
    gap: 'var(--gap)',
  },
}));

export default function ColumnContainer({
  children,
  utilities,
  variant,
  className = '',
  style,
  gap,
  ...rest
}) {
  const variants = {
    'pricing-plan-column-container': 'lg:p-[24px] lg:items-center',
    'accordian-column-container': 'lg:p-[10px] lg:text-[#525a66ff]',
  };
  const buttonClass = variants[variant] || variants['variant0'];

  const { classes } = useColumnContainerStyles();

  return (
    <div
      className={twMerge(
        'items-center w-full flex flex-col',
        classes.columnContainer,
        buttonClass,
        utilities,
        className
      )}
      style={{ '--gap': gap, ...style }}
      {...rest}>
      {children}
    </div>
  );
}
