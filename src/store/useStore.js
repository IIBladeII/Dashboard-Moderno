import { create } from 'zustand'

export const useStore = create((set) => ({
  isDarkMode: localStorage.getItem('theme') === 'dark' || false,
  sidebarOpen: true,
  currentPage: 'dashboard',
  notifications: [
    { id: 1, message: 'Nova venda realizada', time: '5 min atrás', read: false },
    { id: 2, message: 'Novo usuário cadastrado', time: '15 min atrás', read: false },
    { id: 3, message: 'Relatório mensal disponível', time: '1 hora atrás', read: true },
  ],

  toggleDarkMode: () => set((state) => {
    const newDarkMode = !state.isDarkMode
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
    return { isDarkMode: newDarkMode }
  }),

  toggleSidebar: () => set((state) => ({
    sidebarOpen: !state.sidebarOpen,
  })),

  setCurrentPage: (page) => set({ currentPage: page }),

  markNotificationAsRead: (id) => set((state) => ({
    notifications: state.notifications.map((notif) =>
      notif.id === id ? { ...notif, read: true } : notif
    ),
  })),

  clearNotifications: () => set({ notifications: [] }),
}))
