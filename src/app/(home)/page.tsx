'use client'

import { Atom, Binary, BookIcon, Calculator, WebhookIcon } from 'lucide-react'
import DocsBackground from '@/components/docs-background'
import Link from 'next/link'
import { cn } from '@/lib/cn'
import type { ReactElement } from 'react'
import { Major, Majors } from '@/components/ui/majors'

const majors: Major[] = [
  {
    title: 'Documentation',
    description: 'Get started with the Fumadocs framework.',
    href: '/docs',
    icon: <BookIcon className='size-full' />,
    id: '(index)',
  },
  {
    title: 'API Reference',
    description: "Get started with Fumadocs's API reference feature.",
    href: '/docs/api-reference',
    icon: <WebhookIcon className='size-full' />,
    id: 'api-reference',
  },
  {
    title: 'BS Computer Science',
    description: 'Bachelor of Science in Computer Science.',
    href: '/bs-cs',
    icon: <Binary className='size-full' />,
    id: 'bs-cs',
  },
  {
    title: 'BS Physics',
    description: 'Bachelor of Science in Physics.',
    href: '/bs-phy',
    icon: <Atom className='size-full' />,
    id: 'bs-phy',
  },
  {
    title: 'BS Maths',
    description: 'Bachelor of Science in Mathematics.',
    href: '/bs-maths',
    icon: <Calculator className='size-full' />,
    id: 'bs-maths',
  },
]

export default function DocsPage(): ReactElement {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center'>
      <DocsBackground />
      <div className='relative z-10 flex max-w-[1400px] flex-col items-center gap-6'>
        <div className='inline-flex items-center rounded-full border border-fd-border bg-fd-secondary/50 px-3 py-1 text-sm text-fd-secondary-foreground backdrop-blur-sm'>
          🚀 Welcome to the Future of Leaning
        </div>
        <h1 className='font-bold text-5xl tracking-tight sm:text-7xl'>
          BS Notes
          <br />
          <span className='bg-linear-to-r from-fd-primary to-fd-foreground/60 bg-clip-text text-transparent'>
            Insane Edition
          </span>
        </h1>
        <p className='max-w-xl text-fd-muted-foreground text-lg sm:text-xl'>
          This Notes of subjects of bs semesters is going to be insane. Detailed resources, interactive guides, and everything you need to ace your exams.
        </p>
        <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
           <Link
            href="/bs-cs"
             className={cn(
               'inline-flex h-11 items-center justify-center rounded-lg bg-fd-primary px-8 font-medium text-fd-primary-foreground shadow transition-colors hover:bg-fd-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fd-ring',
             )}
           >
            Get Started
           </Link>
          <Link
            href="/docs"
            className={cn(
              'inline-flex h-11 items-center justify-center rounded-lg border border-fd-input bg-fd-background px-8 font-medium shadow-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fd-ring',
            )}
           >
            View Docs
          </Link>
        </div>
        <div className='mt-16 w-full text-left'>
             <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Browse Majors</h2>
             </div>
            <Majors majors={majors} enabledIds={['(index)', 'api-reference', 'bs-cs']} />
        </div>
      </div>
    </main>
  )
}
