import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';  // Importa o provedor de tema e o hook para acessar o tema
import ThemeToggle from './ThemeToggle';                    // Importa o componente para alternar o tema
import TaskList from './TaskList';                          // Importa o componente da lista de tarefas
import RegisterForm from './RegisterForm';                  // Importa o componente do formulário de registro
import { FormProvider } from './FormContext.jsx';
import ValidationForm from './ValidationForm.jsx';            // Importa o formulário com validação

function App() {
  // Componente raiz que envolve tudo com o ThemeProvider
  return (
    <ThemeProvider> {/* Envolve todos os componentes filhos com o contexto de tema */}
      <FormProvider> {/* Envolve todos os componentes filhos com o contexto de formulário */}
        <AppContent />  {/* Componente para conteúdo do app, que acessa o tema */}
      </FormProvider>
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useTheme(); // Utiliza o hook useTheme para acessar o tema atual

  // Define estilos condicionais baseados no tema atual
  const appStyle = {
    backgroundColor: theme === 'light' ? 'white' : '#333',
    color: theme === 'light' ? 'black' : 'white',
    minHeight: '100vh',
    padding: '20px'
  };

  return (
    <div className="App" style={appStyle}>
      <h1>Aplicação Integrada com Contexto de Tema</h1>
      <ThemeToggle />
      <section style={{ margin: '20px 0' }}>
        <h2>Formulário de Registro</h2>
        <RegisterForm />
      </section>
      <section style={{ margin: '20px 0' }}>
        <h2>Lista de Tarefas</h2>
        <TaskList />
      </section>
      <section style={{ margin: '20px 0' }}>
        <h2>Formulário de Validação</h2>
        <ValidationForm />
      </section>
    </div>
  );
}

export default App;