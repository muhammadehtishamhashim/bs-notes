import { DocsLayout } from 'fumadocs-ui/layouts/notebook'
import { baseOptions, linkItems, logo } from '@/lib/layout.shared'
import { source } from '@/lib/source'
import 'katex/dist/katex.min.css'
import type { CSSProperties } from 'react'

const LEADING_DASHES = /^-+/
const TRAILING_DASHES = /-+$/

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const base = baseOptions()

  return (
    <DocsLayout
      {...base}
      links={linkItems.filter((item) => item.type === 'icon')}
      nav={{
        ...base.nav,
        mode: 'top',
        title: (
          <>
            {logo}
            <span className='font-medium max-md:hidden'>BS NOTES</span>
          </>
        ),
      }}
      sidebar={{
        collapsible: true,
      }}
      tabMode='navbar'
      tree={source.pageTree}
    >
      {children}
    </DocsLayout>
  )
}

function serializeSegment(segment: string | undefined): string {
  const raw = (segment ?? '').trim()

  const kebab = raw
    .toLowerCase()
    .replace(/[_\s]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(LEADING_DASHES, '')
    .replace(TRAILING_DASHES, '')
  return kebab || 'fd'
}
