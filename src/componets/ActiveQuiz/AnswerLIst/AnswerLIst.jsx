import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';

import classes from './AnswerLIst.module.css';

const AnswerLIst = (props) => {
    return (
        <ul className={classes.AnswerLIst}>
            {props.answers.map((ans,ind)=> {
                return (
                    <AnswerItem 
                    answers={ans} 
                    key={ind}
                    onAnswerClick={props.onAnswerClick}
                    stateA={props.stateA ? props.stateA[ans.id]: null}
                    />
                )
            })}
        </ul>
    )
}

export default AnswerLIst;
