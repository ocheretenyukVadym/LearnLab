import React from 'react';
import TaskTodo from '../TaskTodo/TaskTodo';
import InputTask from '../InputTask/InputTask';
 
const TodoList = (props) => {

    const deleteTask = (currentId) => {
        let temp = props.todoTasks.filter(task => task.id !== currentId);
        props.setTask(temp);
    }

    return(
        <div>
        <InputTask setId={props.setId} todoTasks={props.todoTasks} idTask={props.idTask} setTask={props.setTask} />
        {props.todoTasks.map(task => <TaskTodo todoTask={task} deleteTask = {deleteTask} /> )}
        </div>
    )
}

export default TodoList;