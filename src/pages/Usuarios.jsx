import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import DataTable from '../components/dashboard/DataTable'
import { tableData } from '../data/mockData'

export default function Usuarios() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Gerenciamento de Usuários</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Visualize e gerencie todos os usuários do sistema</p>
      </div>

      <DataTable data={tableData} />
    </motion.div>
  )
}
