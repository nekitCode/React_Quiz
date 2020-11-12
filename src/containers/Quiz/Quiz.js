import React, { Component } from 'react';
import ActiveQuiz from '../../componets/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../componets/FinishedQuiz/FinishedQuiz';


import classes from './Quiz.module.css';

class Quiz extends Component {

    state = {
        results: {}, // {[id]: success error}
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {   
                question: 'Какое из этих озер по площади самое маленькое?',
                rightAnswerId: 2,
                answerId: 1,
                answers: [
                    {text:'Онежское', id: 1},
                    {text:'Ильмень', id: 2}, // V
                    {text:'Байкал', id: 3},
                    {text:'Ладожское', id: 4}, 
                ]
            },
            {   
                question: 'Кто из этих художников написал знаменитый портрет Ф.И. Шаляпина в шубе?',
                rightAnswerId: 1,
                answerId: 2,
                answers: [
                    {text:'Кустодиев', id: 1}, // V
                    {text:'Бродский', id: 2},
                    {text:'Врубель', id: 3},
                    {text:'Репин', id: 4}, 
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
          const key = Object.keys(this.state.answerState)[0]
          if (this.state.answerState[key] === 'success') {
            return
          }
        }
    
        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results
    
        if (question.rightAnswerId === answerId) {
          if (!results[question.id]) {
            results[question.id] = 'success'
          }
    
          this.setState({
            answerState: {[answerId]: 'success'},
            results
          })
    
          const timeout = window.setTimeout(() => {
            if (this.isQuizFinished()) {
              this.setState({
                isFinished: true
              })
            } else {
              this.setState({
                activeQuestion: this.state.activeQuestion + 1,
                answerState: null
              })
            }
            window.clearTimeout(timeout)
          }, 1000)
        } else {
          results[question.id] = 'error'
          this.setState({
            answerState: {[answerId]: 'error'},
            results
          })
          
        }
      }

isQuizFinished(){
    return this.state.activeQuestion + 1 === this.state.quiz.length
}

retryHendler = () =>{
  this.setState({
    activeQuestion:0,
    answerState: null,
    isFinished:false,
    results: {}
  })
}

    render() {
        return (
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    {this.state.isFinished 
                        ? <FinishedQuiz 
                            results={this.state.results}
                            quiz={this.state.quiz}
                            onRetry={this.retryHendler}
                        />
                        :
                        <ActiveQuiz
                          question={this.state.quiz[this.state.activeQuestion].question} 
                          answers={this.state.quiz[this.state.activeQuestion].answers}
                          onAnswerClick={this.onAnswerClickHandler}
                          quizLength={this.state.quiz.length}
                          answerNumber={this.state.activeQuestion + 1}
                          stateA={this.state.answerState}
                     />
                    }

                     
                </div>
            </div>
        )
    }
}
export default Quiz;