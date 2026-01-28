'use client'

import { cn } from '@/lib/cn'
import { BookIcon, type LucideIcon } from 'lucide-react'
import Link from 'next/link'
import type { ReactElement, ReactNode } from 'react'

interface SemesterProps {
  semesters: number[]
  enabledSemesters?: number[]
  basePath: string
}

export function Semester({ semesters, enabledSemesters = [], basePath }: SemesterProps): ReactElement {
  return (
    <div className='mt-8 grid grid-cols-1 gap-4 text-left md:grid-cols-2 lg:grid-cols-3'>
      {semesters.map((sem) => {
        const isEnabled = enabledSemesters.includes(sem)
        return (
            <SemesterItem 
                key={sem}
                semester={sem}
                basePath={basePath}
                disabled={!isEnabled}
            />
        )
      })}
    </div>
  )
}

function SemesterItem({
  semester,
  basePath,
  disabled,
}: { semester: number, basePath: string, disabled?: boolean }): ReactElement {
    const title = `Semester ${semester}`
    const description = `Subjects and resources for Semester ${semester}.`
    const href = `${basePath}/sem-${semester}`
    
  const content = (
    <>
      <div className='mb-2 size-9 rounded-lg border p-1.5 shadow-fd-primary/30'
        style={{
           boxShadow: 'inset 0px 8px 8px 0px var(--tw-shadow-color)',
        }}
      >
        <BookIcon className='size-full' />
      </div>
      <h2 className='mb-2 font-semibold text-lg'>{title}</h2>
      <p className='text-fd-muted-foreground text-sm'>{description}</p>
    </>
  )

  if (disabled) {
    return (
      <div
        className={cn(
          'relative rounded-2xl border border-border bg-fd-accent/10 p-6 shadow-sm cursor-not-allowed opacity-70',
          'group overflow-hidden'
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <span className="font-semibold text-sm bg-fd-primary text-fd-primary-foreground px-3 py-1 rounded-full">Coming Soon</span>
        </div>
        {content}
      </div>
    )
  }

  return (
    <Link
      href={href}
      className='rounded-2xl border border-border bg-fd-accent/30 p-6 shadow-lg backdrop-blur-lg transition-all hover:bg-fd-accent'
    >
      {content}
    </Link>
  )
}
