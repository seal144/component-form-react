import React, { useState } from 'react';

import './Form.scss'

const Form = () => {
  // const [ userName, setUserName ] = useState('');
  // const [ email, setEmail] = useState('');
  // const [ password, setPassword] = useState('');
  // const [ accept, setAccept] = useState(false);
  // const [ message, setmessage] = useState('');
  const [ formValues, setFormValues ] = useState({
    userName: '',
    email: '',
    password: '',
    accept: false,
  })
  const [ formMessage, setFormMessage ] = useState('')
  const  [errors, setErrors ] = useState({
    userName: false,
    email: false,
    password: false,
    accept: false
  })

  const messages = {
    username_inccorect: 'Nazwa musi być dłużasza niz 2 znaki i nie może zawierać spacji',
    email_inccorect: 'niepoprawny email',
    password_inccorect: 'Hasło musi zawierać 8 znaków i conajmniej jedną liczbę',
    accept_incorrect: 'Zgoda wymagana'
  }

  const handleChange = () => {

  }

  const handleSubmit = () => {

  }

  return(
    <form 
      onSubmit = {handleSubmit}
      onChange = {handleChange}
      noValidate
      classsName = "form"
    >
      <label htmlFor = "user" classsName = "form__label">
        Twoje imię:
        <input 
          classsName = "form__input"
          type = "text"
          id = "user"
          name = "userName"
          value = {formValues.userName}
        />
        {errors.userName && (
          <span> {messages.username_inccorect} </span>
        )}
      </label>

      <label htmlFor = "email" classsName = "form__label">
        Email:
        <input 
          classsName = "form__input"
          type = "email"
          id = "email"
          name = "email"
          value = {formValues.email}
        />
        {errors.email && (
          <span> {messages.email_inccorect} </span>
        )}
      </label>

      <label htmlFor = "password" classsName = "form__label">
        Hasło:
        <input
          classsName = "form__input"
          type = "password"
          id = "password"
          name = "password"
          value = {formValues.password}
        />
        {errors.password && (
          <span> {messages.password_inccorect} </span>
        )}
      </label>

      <label htmlFor = "accept" classsName = "form__label">
        Wyrażam zgodę:
        <input 
          classsName = "form__input"
          type = "checkbox"
          id = "accept"
          name = "accept"
          checked = {formValues.accept}
        />
        {errors.accept && (
          <span> {messages.accept_inccorect} </span>
        )}
      </label>
      <button type="submit" classsName = "form__submit">
          Zapisz się
      </button>
      {formMessage && <h3> { formMessage } </h3>}
    </form>
  )
}

export default Form;