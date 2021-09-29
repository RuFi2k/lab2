import React from "react";
import Completed from "../../components/completed";
import { GetQuestion } from "../../services";
import { Answer, Question } from "../../services/questions";

const Quiz: React.FC = () => {
    const [questions, setQuestions] = React.useState<Question[]>([]);
    const [score, setScore] = React.useState<{ [t: string]: number}>({});
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
        setScore(prev => ({ ...prev, [question.text]: answer.value }));
    };

    const submit = () => {
        setCompleted(true);
    }

    if(completed){
        return <Completed isCat={Object.keys(score).reduce((a, b) => a + score[b], 0) < 0} />
    }

    return <div className="quiz">
        <h1>Answer the quiz and get your pet!</h1>
        {questions.map((question, id) => (
            <div key={id}>
                <p>{question.text}</p>
                {question.answers.map((answer, key) => (
                    <p
                        key={key}
                        className={"answer " + (score[question.text] === answer.value ? "selected" : "")}
                        onClick={() => toggleAnswer(question, answer)}>
                        {answer.text}
                    </p>
                ))}
            </div>
        ))}
        <button onClick={submit} disabled={disabled}>Complete quiz</button>
    </div>;
};

export default Quiz;
