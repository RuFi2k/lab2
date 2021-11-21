import { Answer, Question } from "../../../services/questions"
import AnswerRow from "./Answer";

type Props = {
    question: Question,
    score: number | undefined,
    onClick: (question: Question, answer: Answer) => void,
}

const QuestionRow: React.FC<Props> = ({ question, score, onClick }) => (
    <div>
        <p>{question.text}</p>
        {question.answers.map((answer, key) => (
            <AnswerRow
                key={key}
                {...answer}
                score={score}
                onClick={() => onClick(question, answer)}
            />
        ))}
    </div>
)

export default QuestionRow;
