import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
  const currentDate = new Date().toLocaleDateString();
  const dateFormated = currentDate.split('/').reverse().join('-');
  const validate = Yup.object({
    titulo: Yup.string()
      .max(100, 'Máximo 100 Caracteres')
      .required('Obrigatório'),
    descricao: Yup.string()
      .required('Obrigatório'),
    peso: Yup.string()
      .required('Obrigatório'),
    codigo: Yup.string()
      .required('Obrigatório'),
    preco: Yup.string()
      .required('Obrigatório'),
    data: Yup.date()
      .max(new Date().toLocaleDateString()).required("Campo obrigatório")
      .required('Obrigatório'),

  })
  return (
    <Formik
      initialValues={{
        titulo: '',
        descricao: '',
        peso: '',
        codigo: '',
        data: '',
        preco: '',
        
   
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Cadastro de Produtos</h1>
          <Form>
            <TextField label="Título Produto" name="titulo" type="text" />
            <TextField label="Descrição" name="descricao" type="text" />
            <TextField label="Peso" name="peso" type="text" />
            <TextField label="Código" name="codigo" type="text" />
            <TextField label="Data Aquisição" name="data" type="text" />
            <TextField label="Preço" name="preco" type="text" />
            <button className="btn btn-dark mt-3" type="submit">Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}