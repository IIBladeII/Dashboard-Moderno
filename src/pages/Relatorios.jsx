import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import LineChartComponent from '../components/dashboard/LineChart'
import PieChartComponent from '../components/dashboard/PieChart'
import { chartData, pieChartData } from '../data/mockData'

export default function Relatorios() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Relatórios</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Análise detalhada de desempenho e métricas</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChartComponent data={chartData} />
        <PieChartComponent data={pieChartData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total de Vendas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary-500">$125,430</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">+15% em relação ao mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Novos Usuários</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-secondary-500">1,234</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">+8% em relação ao mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Taxa de Retenção</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-500">92.5%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">+3.2% em relação ao mês anterior</p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
