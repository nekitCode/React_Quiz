import React from 'react';

import classes from './AnswerItem.module.css';

const AnswerItem = (props) => {

const cls = [classes.AnswerItem];

    if(props.stateA){
        cls.push(classes[props.stateA]);
    }

    return (
        <li 
        className={cls.join(' ')}
        onClick={()=> props.onAnswerClick(props.answers.id)}
        >
            {props.answers.text}
        </li>
    )
} 

export default AnswerItem;