import { DocsLayout } from 'fumadocs-ui/layouts/notebook'
import { baseOptions, linkItems, logo } from '@/lib/layout.shared'
import { bsMathsSource } from '@/lib/source'
import 'katex/dist/katex.min.css'
import type { CSSProperties, ReactNode } from 'react'

const LEADING_DASHES = /^-+/
const TRAILING_DASHES = /-+$/

export default function Layout({ children }: { children: ReactNode }) {
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
            <span className='font-medium max-md:hidden'>BS MATHS NOTES</span>
          </>
        ),
      }}
      sidebar={{
        collapsible: true,
        tabs: {
          transform(option, node) {
            const meta = bsMathsSource.getNodeMeta(node)
            if (!(meta && node.icon)) {
              return option
            }

            const segments = meta.path.split('/')
            const segment = serializeSegment(segments[0])

            const color = `var(--${segment}-color, var(--color-fd-foreground))`
            return {
              ...option,
              icon: (
                <div
                  className='size-full rounded-lg text-(--tab-color) max-md:border max-md:bg-(--tab-color)/10 max-md:p-1.5 [&_svg]:size-full'
                  style={
                    {
                      '--tab-color': color,
                    } as CSSProperties
                  }
                >
                  {node.icon}
                </div>
              ),
            }
          },
        },
      }}
      tabMode='navbar'
      tree={bsMathsSource.pageTree}
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
