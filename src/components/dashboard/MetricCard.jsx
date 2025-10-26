import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { Card, CardContent } from '../ui/Card'
import { cn } from '../../utils/cn'

export default function MetricCard({ title, value, change, isPositive, icon }) {
  const IconComponent = Icons[icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{title}</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{value}</h3>
              <div className="flex items-center gap-2 mt-4">
                <span
                  className={cn(
                    'text-sm font-semibold',
                    isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  )}
                >
                  {change}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">vs mês anterior</span>
              </div>
            </div>
            {IconComponent && (
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <IconComponent size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
