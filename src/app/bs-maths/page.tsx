import type { ReactElement } from 'react'
import { Semester } from '@/components/ui/semester'

export default function BsMathsPage(): ReactElement {
  return (
    <main className='mx-auto flex w-full max-w-[1400px] flex-col px-4 py-16'>
      <h1 className='font-semibold text-2xl md:text-3xl'>BS Mathematics</h1>
      <p className='mt-1 text-fd-muted-foreground text-lg'>
        Select your semester.
      </p>

      <Semester 
        semesters={Array.from({ length: 8 }, (_, i) => i + 1)}
        basePath="/bs-maths"
        enabledSemesters={[]} 
      />
    </main>
  )
}
