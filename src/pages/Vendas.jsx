import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import LineChartComponent from '../components/dashboard/LineChart'
import { chartData } from '../data/mockData'

export default function Vendas() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Vendas</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Acompanhe o desempenho de vendas em tempo real</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Vendas Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary-500">$4,230</p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-2">↑ 12% vs ontem</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Vendas Esta Semana</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-secondary-500">$28,450</p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-2">↑ 8% vs semana anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Vendas Este Mês</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-500">$125,430</p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-2">↑ 15% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Ticket Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-yellow-500">$245.50</p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-2">↑ 5% vs mês anterior</p>
          </CardContent>
        </Card>
      </div>

      <LineChartComponent data={chartData} />
    </motion.div>
  )
}
