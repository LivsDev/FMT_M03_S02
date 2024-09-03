import React, { useState, useEffect } from 'react';

function TaskList() {
    // Estado para armazenar as tarefas
    const [tasks, setTasks] = useState(() => {
        // Carregar tarefas do localStorage ao inicializar
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    // Efeito colateral para salvar as tarefas no localStorage sempre que elas mudarem
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Função para adicionar uma nova tarefa
    const addTask = task => {
        setTasks(prevTasks => [...prevTasks, task]);
    };

    // Função para remover uma tarefa específica
    const removeTask = index => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <input
                type="text"
                onKeyPress={event => {
                    if (event.key === 'Enter' && event.target.value) {
                        addTask(event.target.value);
                        event.target.value = ''; // Limpar o campo após adicionar
                    }
                }}
                placeholder="Adicione uma nova tarefa e pressione Enter"
            />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => removeTask(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
