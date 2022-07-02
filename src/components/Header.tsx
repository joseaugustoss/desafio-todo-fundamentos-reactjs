import styles from "./Header.module.css";
import logoTodo from "../assets/todo-logo.png";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logoTodo} alt="Todo logo" />
    </div>
  );
}
