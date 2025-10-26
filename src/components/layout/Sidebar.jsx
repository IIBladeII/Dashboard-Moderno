import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import * as Icons from 'lucide-react'
import { useStore } from '../../store/useStore'
import { sidebarItems } from '../../data/mockData'
import { cn } from '../../utils/cn'

export default function Sidebar() {
  const { sidebarOpen, toggleSidebar, currentPage, setCurrentPage } = useStore()

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay Mobile */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: sidebarOpen ? 0 : -280,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 h-screen w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-40 md:translate-x-0 md:static"
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <h1 className="font-bold text-lg">Dashboard</h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">Moderno</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {sidebarItems.map((item) => {
              const IconComponent = Icons[item.icon]
              const isActive = currentPage === item.id

              return (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id)
                    if (window.innerWidth < 768) {
                      toggleSidebar()
                    }
                  }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200',
                    isActive
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  )}
                >
                  {IconComponent && <IconComponent size={20} />}
                  <span>{item.label}</span>
                </motion.button>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="text-xs text-slate-500 dark:text-slate-400 text-center">
              <p>© 2024 Dashboard</p>
              <p>Todos os direitos reservados</p>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  )
}
