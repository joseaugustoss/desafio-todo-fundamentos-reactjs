import styles from "./NewTask.module.css";
import { PlusCircle } from "phosphor-react";

export function NewTask() {
  return (
    <>
      <form className={styles.formTask}>
        <input type="text" placeholder="Add a new task" />
        <button type="submit">
          Criar <PlusCircle size={18} color="var(--gray-100)" weight="bold" />{" "}
        </button>
      </form>
    </>
  );
}
