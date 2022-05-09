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

  const handleChange = (event) => {
    const {name} = event.target;
    const {type} = event.target;

    if(type === 'text' ||type==='password' || type === 'email') {
      const {value} = event.target;
      setFormValues(prevState => ({
        ...prevState,
        [name]: value
      }))
    } else if (type === 'checkbox') {
      const {checked} = event.target
      setFormValues(prevState => ({
        ...prevState,
        [name]: checked
      }))
    } 
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const validation = formValidation();

    if(validation.correct) {
      console.log('wyslanie formularza', formValues)
      setFormValues({
        userName: '',
        email: '',
        password: '',
        accept: false,
      });
      setFormMessage('Formularz został wysłany')
      setErrors({
        userName: false,
        email: false,
        password: false,
        accept: false
      })
    } else {
      setErrors({
        userName: !validation.userName,
        email: !validation.email,
        password: !validation.password,
        accept: !validation.accept
      })
    }
  }

  const formValidation = () => {
    let userName = true;
    let email = true;
    let password = true;
    let accept = true;
    let correct = true;
    return {
    userName,
    email,
    password,
    accept,
    correct
    }
  }

  return(
    <form 
      onSubmit = {handleSubmit}
      noValidate
      className = "form"
    > 
      <div className="form__element">
        <label htmlFor = "user" className = "form__label">
          Twoje imię:
        </label>
        <input 
            className = "form__input"
            type = "text"
            id = "user"
            name = "userName"
            value = {formValues.userName}
            onChange = {handleChange}
        /> 
      </div>

      <div className="form__element form__element--error">
        {errors.userName && (
          <span className = "form__error" > {messages.username_inccorect} </span>
        )}
      </div >

      <div className="form__element">
        <label htmlFor = "email" className = "form__label">
          Email:
        </label>
        <input 
            className = "form__input"
            type = "email"
            id = "email"
            name = "email"
            value = {formValues.email}
            onChange = {handleChange}
          />
          
      </div>

      <div className="form__element form__element--error">
        {errors.email && (
          <span className = "form__error"> {messages.email_inccorect} </span>
        )}
      </div>
      
      <div className="form__element">
        <label htmlFor = "password" className = "form__label">
          Hasło:
        </label>
        <input
          className = "form__input"
          type = "password"
          id = "password"
          name = "password"
          value = {formValues.password}
          onChange = {handleChange}
        />
      </div>
      
      <div className="form__element form__element--error">
        {errors.password && (
          <span className = "form__error"> {messages.password_inccorect} </span>
        )}
      </div>

      <div className="form__element">
        <label htmlFor = "accept" className = "form__label">
          Wyrażam zgodę:
        </label>

        <input 
          className = "form__input form__input--checkbox"
          type = "checkbox"
          id = "accept"
          name = "accept"
          checked = {formValues.accept}
          onChange = {handleChange}
        />
      </div>

      <div className="form__element form__element--error">
        {errors.accept && (
          <span className = "form__error"> {messages.accept_inccorect} </span>
        )}
      </div>

      <div className="form__element">
        <button type="submit" className = "form__submit">
            Zapisz się
        </button>
      </div>

      <div className="form__element form__element--error">
        {formMessage && <span className = "form__error form__error--success"> { formMessage } </span> }
      </div>
    </form>
  )
}

export default Form;