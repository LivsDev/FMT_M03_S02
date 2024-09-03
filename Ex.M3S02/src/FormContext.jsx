import React, { createContext, useContext, useState } from 'react';

// Criar o contexto
const FormContext = createContext();

// Hook customizado para acessar o contexto de formulário
export function useFormContext() {
  return useContext(FormContext);
}

// Provider que encapsula os filhos com o contexto do formulário
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Função para atualizar os dados do formulário
  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
