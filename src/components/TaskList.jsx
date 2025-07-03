import { Task } from "./Task"

export const TaskList = ({ tasks }) =>  {
    return (
        <div>
           {tasks.map((task) => (
                <Task key={task.id} {...task}>
                    {task.title}
                </Task>
           ))}
        </div>
    )
}