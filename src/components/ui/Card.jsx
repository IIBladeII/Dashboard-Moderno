import { cn } from '../../utils/cn'

export const Card = ({ className, ...props }) => (
  <div
    className={cn(
      'rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-lg transition-shadow duration-300',
      className
    )}
    {...props}
  />
)

export const CardHeader = ({ className, ...props }) => (
  <div className={cn('flex flex-col space-y-1.5 p-6 border-b border-slate-200 dark:border-slate-800', className)} {...props} />
)

export const CardTitle = ({ className, ...props }) => (
  <h2 className={cn('text-2xl font-bold leading-none tracking-tight', className)} {...props} />
)

export const CardDescription = ({ className, ...props }) => (
  <p className={cn('text-sm text-slate-600 dark:text-slate-400', className)} {...props} />
)

export const CardContent = ({ className, ...props }) => (
  <div className={cn('p-6 pt-0', className)} {...props} />
)

export const CardFooter = ({ className, ...props }) => (
  <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
)
