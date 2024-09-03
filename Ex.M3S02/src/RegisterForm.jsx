import React from 'react';
import { useForm } from 'react-hook-form';
// Importação do React e o hook useForm da biblioteca react-hook-form

// Definição do componente RegisterForm
function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // Destruturação de várias funções e objetos do hook useForm
   // - register: função para registrar os inputs no formulário e definir as regras de validação
  // - handleSubmit: função que processa o formulário após a validação
  // - errors: objeto contendo os erros de validação de cada campo

   // Função onSubmit que será chamada quando o formulário for enviado e validado com sucesso
    const onSubmit = data => {
        console.log(data); // Exibe no console os dados do formulário
        alert('Registro concluído com sucesso!'); // Alerta de sucesso
      };

    // Estrutura JSX do formulário
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
         {/* Formulário com evento onSubmit manipulado pelo handleSubmit */}

        <div>
        <label htmlFor="name">Nome:</label>
        <input id="name" {...register('name', { required: true })} /> 
        {errors.name && <span>Nome é obrigatório.</span>} {/* Mensagem de erro se o campo nome estiver vazio */}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" {...register('email', { required: true })} />
        {errors.email && <span>Email é obrigatório.</span>}
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input id="password" type="password" {...register('password', { required: true })} />
        {errors.password && <span>Senha é obrigatória.</span>}
      </div>
      <button type="submit">Registrar</button> {/* Botão para enviar o formulário */}
    </form>
  );
}

export default RegisterForm;
