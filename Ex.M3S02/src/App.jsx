import React from 'react';
import RegisterForm from './RegisterForm';
import TaskList from './TaskList'; 

function App() {
  return (
    <div className="App">
      {/* Seção para o formulário de registro */}
      <section style={{ margin: '20px 0' }}>
        <h1>Formulário de Registro</h1>
        <RegisterForm />
      </section>

      {/* Seção para a lista de tarefas */}
      <section style={{ margin: '20px 0' }}>
        <h1></h1>
        <TaskList />
      </section>
    </div>
  );
}

export default App;