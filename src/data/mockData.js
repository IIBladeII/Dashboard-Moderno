export const dashboardMetrics = [
  {
    id: 1,
    title: 'Total de Usuários',
    value: '12,543',
    change: '+12.5%',
    isPositive: true,
    icon: 'Users',
  },
  {
    id: 2,
    title: 'Vendas Totais',
    value: '$45,231',
    change: '+8.2%',
    isPositive: true,
    icon: 'ShoppingCart',
  },
  {
    id: 3,
    title: 'Receita',
    value: '$128,450',
    change: '+23.1%',
    isPositive: true,
    icon: 'TrendingUp',
  },
  {
    id: 4,
    title: 'Taxa de Conversão',
    value: '3.24%',
    change: '-2.4%',
    isPositive: false,
    icon: 'Target',
  },
]

export const chartData = [
  { month: 'Jan', vendas: 4000, receita: 2400, usuarios: 2400 },
  { month: 'Fev', vendas: 3000, receita: 1398, usuarios: 2210 },
  { month: 'Mar', vendas: 2000, receita: 9800, usuarios: 2290 },
  { month: 'Abr', vendas: 2780, receita: 3908, usuarios: 2000 },
  { month: 'Mai', vendas: 1890, receita: 4800, usuarios: 2181 },
  { month: 'Jun', vendas: 2390, receita: 3800, usuarios: 2500 },
  { month: 'Jul', vendas: 3490, receita: 4300, usuarios: 2100 },
]

export const pieChartData = [
  { name: 'Produto A', value: 35 },
  { name: 'Produto B', value: 25 },
  { name: 'Produto C', value: 20 },
  { name: 'Produto D', value: 20 },
]

export const tableData = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao@example.com',
    status: 'Ativo',
    joinDate: '2024-01-15',
    revenue: '$2,450',
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@example.com',
    status: 'Ativo',
    joinDate: '2024-01-20',
    revenue: '$3,120',
  },
  {
    id: 3,
    name: 'Pedro Costa',
    email: 'pedro@example.com',
    status: 'Inativo',
    joinDate: '2024-02-01',
    revenue: '$1,890',
  },
  {
    id: 4,
    name: 'Ana Oliveira',
    email: 'ana@example.com',
    status: 'Ativo',
    joinDate: '2024-02-10',
    revenue: '$4,560',
  },
  {
    id: 5,
    name: 'Carlos Mendes',
    email: 'carlos@example.com',
    status: 'Ativo',
    joinDate: '2024-02-15',
    revenue: '$2,890',
  },
  {
    id: 6,
    name: 'Lucia Ferreira',
    email: 'lucia@example.com',
    status: 'Ativo',
    joinDate: '2024-02-20',
    revenue: '$3,450',
  },
  {
    id: 7,
    name: 'Roberto Alves',
    email: 'roberto@example.com',
    status: 'Inativo',
    joinDate: '2024-03-01',
    revenue: '$1,230',
  },
  {
    id: 8,
    name: 'Fernanda Lima',
    email: 'fernanda@example.com',
    status: 'Ativo',
    joinDate: '2024-03-05',
    revenue: '$5,670',
  },
]

export const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { id: 'usuarios', label: 'Usuários', icon: 'Users' },
  { id: 'relatorios', label: 'Relatórios', icon: 'BarChart3' },
  { id: 'vendas', label: 'Vendas', icon: 'ShoppingCart' },
  { id: 'configuracoes', label: 'Configurações', icon: 'Settings' },
]
