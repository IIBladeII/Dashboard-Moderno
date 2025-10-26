import { motion } from 'framer-motion'
import MetricCard from '../components/dashboard/MetricCard'
import LineChartComponent from '../components/dashboard/LineChart'
import PieChartComponent from '../components/dashboard/PieChart'
import DataTable from '../components/dashboard/DataTable'
import { dashboardMetrics, chartData, pieChartData, tableData } from '../data/mockData'

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.id} {...metric} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LineChartComponent data={chartData} />
        </div>
        <div>
          <PieChartComponent data={pieChartData} />
        </div>
      </div>

      {/* Data Table */}
      <DataTable data={tableData} />
    </motion.div>
  )
}
