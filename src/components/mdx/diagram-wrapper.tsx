import * as React from 'react';

export interface DiagramWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  caption?: string;
}

export function DiagramWrapper({
  title,
  caption,
  className,
  children,
  ...props
}: DiagramWrapperProps) {
  return (
    <div className="my-10 flex flex-col items-center">
      <div
        className={`w-full flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-[#111111] ${
          className || ''
        }`}
        {...props}
      >
        {title && (
          <div className="border-b border-zinc-200 bg-zinc-100 px-4 py-2.5 text-sm font-semibold text-zinc-900 dark:border-zinc-800 dark:bg-black dark:text-zinc-100">
            {title}
          </div>
        )}
        <div className="overflow-x-auto p-4 md:p-6 text-zinc-800 dark:text-zinc-300 custom-scrollbar">
          <div className="min-w-max mx-auto flex justify-center py-6 px-4">
            {children}
          </div>
        </div>
      </div>
      {caption && (
        <div className="mt-4 text-center text-sm font-semibold text-primary">
          {caption}
        </div>
      )}
    </div>
  );
}
