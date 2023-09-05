import Card from "./Card" 
import Button from "./Button"
import Wrapper from '../helpers/Wrapper'
import styles from "./ErrorModal.module.css" 

const ErrorModal = (props) => {
  return (
    <Wrapper>
      <div className={styles.backdrop} onClick={props.onCloseModal}></div>

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
    </Wrapper>
  ) 
} 

export default ErrorModal 
