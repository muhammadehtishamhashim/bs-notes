'use client'

import { BookIcon, CodeIcon, VariableIcon, CpuIcon, ShieldCheckIcon, DatabaseIcon } from 'lucide-react'
import DocsBackground from '@/components/docs-background'
import Link from 'next/link'
import { cn } from '@/lib/cn'
import type { ReactElement } from 'react'

const subjects = [
  {
    title: 'Theory of Automata',
    description: 'Study of abstract machines and automata.',
    href: '/docs/automata/w1',
    icon: <CodeIcon className='size-full' />,
  },
  {
    title: 'Applied Physics',
    description: 'Physics concepts applied to engineering.',
    href: '/docs/applied-phy/w1',
    icon: <BookIcon className='size-full' />,
  },
  {
    title: 'Linear Algebra',
    description: 'Vector spaces and linear mappings.',
    href: '/docs/linear-alg/w1',
    icon: <VariableIcon className='size-full' />,
  },
  {
    title: 'Computer Organization',
    description: 'Architecture and organization of computers.',
    href: '/docs/comp-org/w1',
    icon: <CpuIcon className='size-full' />,
  },
  {
    title: 'Information Security',
    description: 'Protecting information and systems.',
    href: '/docs/info-sec/w1',
    icon: <ShieldCheckIcon className='size-full' />,
  },
  {
    title: 'Advance Database',
    description: 'Advanced concepts in database systems.',
    href: '/docs/adv-db/w1',
    icon: <DatabaseIcon className='size-full' />,
  },
]

export default function HomePage(): ReactElement {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center'>
      <DocsBackground />
      <div className='relative z-10 flex max-w-[1400px] flex-col items-center gap-6'>
        <div className='inline-flex items-center rounded-full border border-fd-border bg-fd-secondary/50 px-3 py-1 text-sm text-fd-secondary-foreground backdrop-blur-sm'>
          🚀 Semester 4 Notes
        </div>
        <h1 className='font-bold text-5xl tracking-tight sm:text-7xl'>
          BS Computer Science
          <br />
          <span className='bg-gradient-to-r from-fd-primary to-fd-foreground/60 bg-clip-text text-transparent'>
            Semester 4
          </span>
        </h1>
        <p className='max-w-xl text-fd-muted-foreground text-lg sm:text-xl'>
          Comprehensive notes and resources for all Semester 4 subjects.
        </p>
        
        <div className='mt-16 grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3'>
          {subjects.map((subject) => (
            <Link
              key={subject.title}
              href={subject.href}
              className='rounded-2xl border border-fd-border bg-fd-card p-6 shadow-lg transition-all hover:bg-fd-accent/50 hover:text-fd-accent-foreground'
            >
              <div className='mb-4 size-10 rounded-lg border bg-fd-background p-2 shadow-sm'>
                {subject.icon}
              </div>
              <h2 className='mb-2 font-semibold text-lg'>{subject.title}</h2>
              <p className='text-fd-muted-foreground text-sm'>{subject.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
