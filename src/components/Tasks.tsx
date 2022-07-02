import { Trash } from "phosphor-react";
import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.taskCreate}>
            <strong>
              Tarefas criadas <span>0</span>
            </strong>
          </div>
          <div className={styles.taskCompleted}>
            <strong>
              Concluída <span>0</span>
            </strong>
          </div>
        </div>
        <div className={styles.tasks}>
          <div className={styles.taskContent}>
            <input type="checkbox" name="taskCheck" />
            <label className="checkbox"></label>
            <p>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>
            <Trash size={18} />
          </div>
        </div>
      </div>
    </>
  );
}
