import Card from "./Card" 
import Button from "./Button"
import Wrapper from '../helpers/Wrapper'
import styles from "./ErrorModal.module.css" 
import { createPortal } from 'react-dom'
function BackDrop({props}) {
  return (
    <div className={styles.backdrop} onClick={props.onCloseModal}></div>
  )
}
function Modal({props}) {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onCloseModal}>Закрыть</Button>
      </footer>
    </Card>
  )
}
const ErrorModal = (props) => {
  return (
    <Wrapper>
      {
        createPortal(<BackDrop props={props} />,
        document.querySelector('#backdrop'))
      }
      {
        createPortal(<Modal props={props} />,
        document.querySelector('#modal'))
      }
      
    </Wrapper>
  ) 
} 

export default ErrorModal 
