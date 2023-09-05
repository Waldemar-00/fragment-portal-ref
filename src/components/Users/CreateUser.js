import React, { useState, Fragment, useRef } from "react" 
import Card from "../UI/Card" 
import Button from "../UI/Button" 

import styles from "./CreateUser.module.css" 
import ErrorModal from "../UI/ErrorModal" 

const CreateUser = (props) => {
  const [error, setError] = useState() 
  const nameRef = useRef() //return object with property current
  const ageRef = useRef()

  const createUserHandler = (event) => {
    event.preventDefault() 
    const name = nameRef.current.value
    const age = ageRef.current.value
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Некорректный ввод",
        message: "Эти поля не могут быть пустыми",
      }) 
      return 
    }
    if (+age < 1) {
      setError({
        title: "Некорректный возраст",
        message: "Возраст должен быть больше 0",
      }) 
      return 
    }
    // console.log(inputName, inputAge) 
    props.onCreateUser(name, age) 
    nameRef.current.value = ''
    ageRef.current.value = ''
  } 

  const errorHandler = () => {
    setError(false) 
  } 

  return (
    <Fragment>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            type="text"
            ref={nameRef}
          />
          <label htmlFor="age">Возраст</label>
          <input
            id="age"
            type="number"
            ref={ageRef}
          />
          <Button type="submit">Добавить Пользователя</Button>
        </form>
      </Card>
    </Fragment>
  ) 
} 

export default CreateUser 
