import { ClipboardText } from "phosphor-react";
import styles from "./EmptyTask.module.css";

export function EmptyTask() {
  return (
    <>
      <div className={styles.empty}>
        <ClipboardText size={60} />
        <h1 className={styles.info}>Você ainda não tem tarefas cadastradas</h1>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </>
  );
}
