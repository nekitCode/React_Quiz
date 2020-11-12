import React from 'react';
import AnswerLIst from './AnswerLIst/AnswerLIst';

import Activequiz from './ActiveQuiz.module.css';

const ActiveQuiz = props => {
    console.log(props);
    return (
        <div className={Activequiz.Activequiz}>
            <p className={Activequiz.Question}>
                <span className={Activequiz.span}>
                    <strong>{props.answerNumber} .</strong>&nbsp;
                    {props.question}
                </span>
                <span className={Activequiz.var_span}> {props.answerNumber} из { props.quizLength } </span>
            </p>
        <AnswerLIst 
        answers={props.answers} 
        onAnswerClick={props.onAnswerClick}
        stateA={props.stateA}
        />
        </div>
    )
}
export default ActiveQuiz;