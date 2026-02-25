import * as React from 'react';

export interface MathWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export function MathWrapper({
  title = 'Solution',
  className,
  children,
  ...props
}: MathWrapperProps) {
  return (
    <div
      className={`my-6 flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-[#111111] ${
        className || ''
      }`}
      {...props}
    >
      {title && (
        <div className="border-b border-zinc-200 bg-zinc-100 px-4 py-2.5 text-sm font-semibold text-zinc-900 dark:border-zinc-800 dark:bg-black dark:text-zinc-100">
          {title}
        </div>
      )}
      <div className="overflow-x-auto p-4 md:p-6 text-zinc-800 dark:text-zinc-300">
        {children}
      </div>
    </div>
  );
}
