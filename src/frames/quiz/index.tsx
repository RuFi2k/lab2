import React from "react";
import { Link } from 'react-router-dom';
import Completed from "../../components/completed";
import { GetQuestion } from "../../services";
import { Answer, Question } from "../../services/questions";

const Quiz: React.FC = () => {
    const [questions, setQuestions] = React.useState<Question[]>([]);
    const [score, setScore] = React.useState<number>(0);
    const [completed, setCompleted] = React.useState<boolean>(false);
    const [questionStatuses, setStatuses] = React.useState<{[t: string]: boolean}>({});
    const [disabled, setDisabled] = React.useState<boolean>(true);
    React.useEffect(() => {
        for(let i = 0; i < 5; ++i){
            let generated: any;
            setQuestions(prev => {
                generated = GetQuestion(prev);
                return [...prev, generated];
            });
            setStatuses(prev => ({
                ...prev,
                [generated.text]: false,
            }));
        }
    }, []);

    React.useEffect(() => {
        setDisabled(Object.keys(questionStatuses).some(key => !questionStatuses[key]));
    }, [questionStatuses]);

    const toggleAnswer = (question: Question, answer: Answer) => {
        setStatuses(prev => ({
            ...prev,
            [question.text]: true,
        }));
        setScore(answer.value);
    };

    const submit = () => {
        setCompleted(true);
    }

    if(completed){
        return <Completed isCat={score < 0} />
    }

    return <>
        <h1>Answer the quiz and get your pet!</h1>
        {questions.map((question, id) => (
            <div key={id}>
                <p>{question.text}</p>
                {question.answers.map((answer, key) => (
                    <p key={key} onClick={() => toggleAnswer(question, answer)}>{answer.text}</p>
                ))}
            </div>
        ))}
        <button onClick={submit} disabled={disabled}>Complete quiz</button>
    </>;
};

export default Quiz;
