import React from 'react';
import RegisterForm from './RegisterForm';
import TaskList from './TaskList'; 
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeContext'

function App() {
  // Uso do hook personalizado para acessar o tema atual
  const { theme } = useTheme();

  // Estilos condicionais baseados no tema atual
  const appStyle = {
    backgroundColor: theme === 'light' ? 'white' : '#333',
    color: theme === 'light' ? 'black' : 'white',
    minHeight: '100vh',
    padding: '20px'
  };

  return (
    <ThemeProvider> {/* Provedor do contexto de tema envolve todos os componentes */}
      <div className="App" style={appStyle}>
        <header>
          <h1>Aplicação com Contexto de Tema</h1>
          <ThemeToggle /> {/* Botão para alternar o tema */}
        </header>
        
        {/* Seção para o formulário de registro */}
        <section style={{ margin: '20px 0' }}>
          <h2>Formulário de Registro</h2>
          <RegisterForm />
        </section>

        {/* Seção para a lista de tarefas */}
        <section style={{ margin: '20px 0' }}>
          <h2>Lista de Tarefas</h2>
          <TaskList />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;