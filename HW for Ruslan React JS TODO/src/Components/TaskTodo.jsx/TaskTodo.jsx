import React,{useState} from 'react';
import './TaskTodo.css';

const TaskTodo = props => {
    const [isDone, setStatus] = useState(false);

    const clickDone = e => setStatus(isDone? false : true)

    console.log(props.todoTask)
    return(
        <div className="task-container">
            <div className="some-text"
                onDoubleClick={() => props.deleteTask(props.todoTask.id)}
                onClick={clickDone}>
                    {isDone? 
                    <strike>{props.todoTask.value}</strike> :
                    <span>{props.todoTask.value}</span>}
                    </div>
        </div>
    )
}

export default TaskTodo;