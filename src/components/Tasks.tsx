import { PlusCircle } from "phosphor-react";
import styles from "./Tasks.module.css";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { ListTask } from "./ListTask";
import { EmptyTask } from "./EmptyTask";

interface intTasks {
  id: string;
  text: string;
  done: boolean;
}

export function Tasks() {
  const [tasks, setTasks] = useState<intTasks[]>([]);
  const [newTasks, setNewTasks] = useState("");

  const [taskDone, setTaskDone] = useState(0);
  const [taskCompletedDone, setTaskCompletedDone] = useState(taskDone);

  const emptyTask = tasks.length === 0;

  function handleDone() {
    setTaskDone(taskDone + 1);
  }
  function handleDeletedDone() {
    setTaskDone(taskDone - 1);
  }

  function onHandleListTask(event: FormEvent<HTMLInputElement>) {
    event.preventDefault();
    setNewTasks(event.currentTarget.value);
  }

  function handleTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, { id: uuidv4(), text: newTasks, done: false }]);
    setTaskDone(taskDone + 1);
    setNewTasks("");
  }

  function deleteTask(text: string) {
    const tasksWithoutDeletedON = tasks.filter((task) => task.text !== text);

    setTasks(tasksWithoutDeletedON);
    setTaskCompletedDone(taskCompletedDone - 1);
    handleDeletedDone();
  }

  function completedTask(text: string) {
    const taskIndex = tasks.findIndex((task) => {
      return task.text == text;
    });

    const tempTasks = [...tasks];

    tempTasks[taskIndex].done = !tempTasks[taskIndex].done;
    tempTasks[taskIndex].done
      ? setTaskCompletedDone(taskCompletedDone + 1)
      : setTaskCompletedDone(taskCompletedDone - 1);

    setTasks(tempTasks);
  }
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>): void {
    console.log(
      event.target.setCustomValidity("Este campo é obrigatório =~)!")
    );
  }
  return (
    <>
      <form className={styles.formTask} onSubmit={handleTask}>
        <input
          value={newTasks}
          type="text"
          required
          onChange={onHandleListTask}
          placeholder="Add a new task"
          name="textTask"
        />
        <button type="submit">
          Criar <PlusCircle size={18} color="var(--gray-100)" weight="bold" />{" "}
        </button>
      </form>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.taskCreate}>
            <strong>
              Tarefas criadas <span>{taskDone}</span>
            </strong>
          </div>
          <div className={styles.taskCompleted}>
            <strong>
              Concluída{" "}
              <span>
                {taskCompletedDone > 0 ? `${taskCompletedDone} / ` : ""}
                {taskDone}
              </span>
            </strong>
          </div>
        </div>
        <div className={styles.tasks}></div>
      </div>
      {emptyTask ? (
        <EmptyTask />
      ) : (
        tasks.map((lista) => {
          return (
            <ListTask
              key={lista.id}
              text={lista.text}
              done={lista.done}
              deleteTask={deleteTask}
              completedTask={completedTask}
            />
          );
        })
      )}
    </>
  );
}
