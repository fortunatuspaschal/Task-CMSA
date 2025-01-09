"use client"
import { createContext, useContext, useState } from 'react';

const FormsContext = createContext();

export function FormsProvider({ children }) {
  const [forms, setForms] = useState([]);
  const [formCount, setFormCount] = useState(1);

  const updateFormCount = (count) => {
    setFormCount(count);
    setForms(Array(count).fill({
      name: '',
      postalAddress: '',
      email: '',
      phone: '',
      organization: ''
    }));
  };

  const updateForm = (index, formData) => {
    const newForms = [...forms];
    newForms[index] = formData;
    setForms(newForms);
  };

  return (
    <FormsContext.Provider value={{ forms, formCount, updateFormCount, updateForm }}>
      {children}
    </FormsContext.Provider>
  );
}

export const useForms = () => useContext(FormsContext); 