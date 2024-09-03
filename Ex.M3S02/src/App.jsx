import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';  // Importa o provedor de tema e o hook para acessar o tema
import ThemeToggle from './ThemeToggle';                    // Importa o componente para alternar o tema
import TaskList from './TaskList';                          // Importa o componente da lista de tarefas
import RegisterForm from './RegisterForm';                  // Importa o componente do formulário de registro
import { FormProvider } from './FormContext';               // Importa o provedor do contexto de formulário
import ValidationForm from './ValidationForm';              // Importa o formulário com validação

function App() {
  const { theme } = useTheme(); // Utiliza o hook useTheme para acessar o tema atual

  // Define estilos condicionais baseados no tema atual
  const appStyle = {
    backgroundColor: theme === 'light' ? 'white' : '#333',  // Cor de fundo baseada no tema
    color: theme === 'light' ? 'black' : 'white',           // Cor do texto baseada no tema
    minHeight: '100vh',                                    // Altura mínima para ocupar a tela inteira
    padding: '20px'                                        // Padding para dar espaçamento interno
  };

  return (
    <ThemeProvider> {/* Envolve todos os componentes filhos com o contexto de tema */}
      <FormProvider> {/* Adiciona o provedor do contexto de formulário ao redor dos componentes que necessitam */}
        <div className="App" style={appStyle}>
          <h1>Aplicação Integrada com Contexto de Tema</h1>
          <ThemeToggle /> {/* Componente para o usuário poder alternar entre temas claro e escuro */}

          {/* Seção para o formulário de registro com validação */}
          <section style={{ margin: '20px 0' }}>
            <h2>Formulário de Registro com Validação</h2>
            <ValidationForm />
          </section>

          {/* Seção para a lista de tarefas */}
          <section style={{ margin: '20px 0' }}>
            <h2>Lista de Tarefas</h2>
            <TaskList />
          </section>
        </div>
      </FormProvider>
    </ThemeProvider>
  );
}

export default App;
