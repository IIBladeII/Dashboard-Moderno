import { useEffect } from 'react'
import { useStore } from './store/useStore'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Dashboard from './pages/Dashboard'
import Usuarios from './pages/Usuarios'
import Relatorios from './pages/Relatorios'
import Vendas from './pages/Vendas'
import Configuracoes from './pages/Configuracoes'

function App() {
  const { isDarkMode, currentPage } = useStore()

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'usuarios':
        return <Usuarios />
      case 'relatorios':
        return <Relatorios />
      case 'vendas':
        return <Vendas />
      case 'configuracoes':
        return <Configuracoes />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden md:ml-0">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 md:p-8">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
