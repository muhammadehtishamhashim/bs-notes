import * as React from 'react';
import Image from 'next/image';

export interface ImageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  lightSrc?: any;
  darkSrc?: any;
  alt: string;
  caption?: string;
  title?: string;
}

export function ImageWrapper({
  lightSrc,
  darkSrc,
  alt,
  caption,
  title,
  className,
  ...props
}: ImageWrapperProps) {
  // If no image is provided, render a placeholder with the alt text (which is our prompt)
  if (!lightSrc && !darkSrc) {
    return (
      <div className="my-10 flex flex-col items-center w-full">
        <div className="w-full rounded-xl border border-dashed border-zinc-300 bg-zinc-50/50 p-8 text-center dark:border-zinc-700 dark:bg-zinc-900/50">
          <h3 className="mb-2 text-sm font-semibold tracking-wider text-zinc-900 uppercase dark:text-zinc-100">AI Image Prompt</h3>
          <p className="whitespace-pre-wrap text-left text-sm text-zinc-600 dark:text-zinc-400 font-mono bg-white dark:bg-black p-4 rounded-lg shadow-inner border border-zinc-100 dark:border-zinc-800">
            {alt}
          </p>
        </div>
      </div>
    );
  }

  const lSrc = lightSrc || darkSrc;
  const dSrc = darkSrc || lightSrc;

  if (!lSrc || !dSrc) return null;

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
        <div className="w-full flex justify-center bg-zinc-100 dark:bg-zinc-900">
          {/* The light mode image */}
          <Image
            src={lSrc}
            alt={alt}
            className="block dark:hidden w-full h-auto object-contain"
          />
          {/* The dark mode image */}
          <Image
            src={dSrc}
            alt={alt}
            className="hidden dark:block w-full h-auto object-contain"
          />
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
