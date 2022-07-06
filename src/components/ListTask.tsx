import styles from "./ListTask.module.css";
import { Trash } from "phosphor-react";

interface propsTask {
  id: string;
  text: string;
  done: boolean;
  deleteTask: (text: string) => void;
  completedTask: (id: string) => void;
}

export function ListTask({
  id,
  text,
  done,
  deleteTask,
  completedTask,
}: propsTask) {
  function handleCompletedDoneTask() {
    completedTask(text);
  }
  function handleDeleteTask() {
    deleteTask(text);
  }
  return (
    <>
      <div key={id} className={styles.taskContent}>
        <>
          <input
            type="checkbox"
            name="taskCheck"
            defaultChecked={done}
            onClick={handleCompletedDoneTask}
          />
          <label className="checkbox"></label>
          <p className={done ? styles.checkTask : styles.unCheckTask}>{text}</p>
          <button onClick={handleDeleteTask} title="Deletar task">
            <Trash size={18} />
          </button>
        </>
      </div>
    </>
  );
}
