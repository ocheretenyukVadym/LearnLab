import React, { useState } from 'react';
import './InputTask.css';

const InputTask = props => {
    const [value, setValue] = useState('');

    const onSendClick = () => {
        let currentId = props.idTask;
        props.setId(currentId + 1);
        props.setTask([...props.todoTasks,
        {
            value: value,
            id: currentId
        }]);
    }

    const _handleKeyDown = e => e.key === 'Enter' && onSendClick();

    return (
        <div className='input'>
            Press Enter for add task || *Click* for done task || *DoubleClick* for delete task
            <input placeholder='What you will do?'
                onKeyDown={_handleKeyDown}
                onChange={e => setValue(e.target.value)}
                value={value}
            />
        </div>
    )
}

export default InputTask;