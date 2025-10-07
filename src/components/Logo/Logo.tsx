/* eslint-disable @typescript-eslint/no-unused-vars */
import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    // <img
    //   alt="Payload Logo"
    //   width={193}
    //   height={34}
    //   loading={loading}
    //   fetchPriority={priority}
    //   decoding="async"
    //   className={clsx('max-w-[9.375rem] w-full h-[34px]', className)}
    //   src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-logo-light.svg"
    // />
    <h1>
      <strong>runsha.dev</strong>
    </h1>
  )
}
