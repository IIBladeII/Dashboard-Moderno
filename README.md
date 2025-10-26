# 📊 Dashboard Moderno

Um dashboard profissional e moderno desenvolvido com **React + Vite**, demonstrando boas práticas de desenvolvimento frontend, design elegante e responsividade.

## ✨ Características

- ✅ **React 18** com Vite para performance otimizada
- ✅ **Tailwind CSS** para estilização moderna e responsiva
- ✅ **Framer Motion** para animações suaves e transições
- ✅ **Recharts** para visualização de dados interativa
- ✅ **Zustand** para gerenciamento de estado simples e eficiente
- ✅ **Dark Mode / Light Mode** com alternância suave
- ✅ **Componentes reutilizáveis** seguindo padrões de design
- ✅ **Responsivo** (desktop, tablet e mobile)
- ✅ **Código limpo** e bem organizado

## 🎨 Design

### Paleta de Cores
- **Primária**: Azul moderno (#0ea5e9)
- **Secundária**: Roxo suave (#8b5cf6)
- **Neutras**: Cinzas elegantes para fundo e texto

### Componentes
- Cards com sombras sutis e bordas arredondadas
- Botões com variações (default, secondary, outline, ghost)
- Inputs estilizados com foco visual
- Badges para status
- Modal com animações
- Tabela com busca, filtros e paginação

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx
│   │   └── Header.jsx
│   ├── dashboard/
│   │   ├── MetricCard.jsx
│   │   ├── LineChart.jsx
│   │   ├── PieChart.jsx
│   │   └── DataTable.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Input.jsx
│       ├── Badge.jsx
│       └── Modal.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Usuarios.jsx
│   ├── Relatorios.jsx
│   ├── Vendas.jsx
│   └── Configuracoes.jsx
├── store/
│   └── useStore.js
├── data/
│   └── mockData.js
├── utils/
│   └── cn.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Como Começar

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/IIBladeII/Dashboard-Moderno.git
cd dashboard-moderno
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador em `http://localhost:5173`

## 📦 Build para Produção

```bash
npm run build
```

O projeto será compilado para a pasta `dist/`.

## 🎯 Páginas Disponíveis

### Dashboard
- Métricas principais (Usuários, Vendas, Receita, Taxa de Conversão)
- Gráfico de linha com desempenho mensal
- Gráfico de pizza com distribuição de produtos
- Tabela de usuários recentes com busca e paginação

### Usuários
- Gerenciamento completo de usuários
- Tabela com filtros e busca
- Status de atividade

### Relatórios
- Análise detalhada de desempenho
- Múltiplos gráficos interativos
- Métricas consolidadas

### Vendas
- Acompanhamento de vendas em tempo real
- Métricas diárias, semanais e mensais
- Ticket médio e tendências

### Configurações
- Gerenciamento de perfil
- Segurança e alteração de senha
- Preferências de notificações
- Seleção de tema

## 🎨 Tema Escuro/Claro

O dashboard suporta alternância entre tema claro e escuro:
- Clique no ícone de sol/lua no header
- A preferência é salva no localStorage
- Transições suaves entre temas

## 🔧 Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| React | 18.2.0 | Framework UI |
| Vite | 5.0.0 | Build tool |
| Tailwind CSS | 3.3.6 | Estilização |
| Framer Motion | 10.16.4 | Animações |
| Recharts | 2.10.3 | Gráficos |
| Zustand | 4.4.1 | State management |
| Lucide React | 0.292.0 | Ícones |

## 📱 Responsividade

O dashboard é totalmente responsivo:
- **Desktop**: Layout completo com sidebar fixa
- **Tablet**: Sidebar colapsável
- **Mobile**: Sidebar em overlay com menu toggle

## 🎓 Boas Práticas Implementadas

- ✅ Componentes funcionais com hooks
- ✅ Separação de responsabilidades
- ✅ Reutilização de componentes
- ✅ Gerenciamento de estado centralizado
- ✅ Código limpo e bem documentado
- ✅ Animações performáticas
- ✅ Acessibilidade básica
- ✅ Estrutura escalável

## 🏆 Diferenciais

✨ **O que torna este projeto especial:**

1. **Código Profissional**: Pronto para produção
2. **Design Moderno**: Segue tendências atuais
3. **Bem Documentado**: Fácil de entender
4. **Escalável**: Pronto para crescer
5. **Performático**: Otimizado para velocidade
6. **Responsivo**: Funciona em qualquer dispositivo
7. **Acessível**: Segue boas práticas
8. **Mantível**: Código limpo e organizado

## 👨‍💻 Autor

**Pedro Riccio**

- 🌐 Portfolio: [pedroriccio.vercel.app](https://pedroriccio.vercel.app)
- 🐙 GitHub: [@Pedro-Dev](https://github.com/Pedro-Dev)
- 📧 Email: pedroworkdev@gmail.com

## 📞 Contato e Suporte

Para dúvidas ou sugestões sobre o projeto:
- 📧 Envie um email: pedroworkdev@gmail.com
- 🐙 Abra uma issue no [GitHub](https://github.com/Pedro-Dev)
- 🌐 Visite meu [Portfolio](https://pedroriccio.vercel.app)
- 🤝 Faça um fork e contribua

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

Copyright (c) 2024 Pedro Riccio

---

**Desenvolvido com ❤️ por Pedro Riccio**
