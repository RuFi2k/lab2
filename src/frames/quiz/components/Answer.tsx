type Props = {
    score: number | undefined,
    value: number,
    text: string,
    onClick: () => void,
}

const AnswerRow: React.FC<Props> = ({ score, text, value, onClick }) => (
    <p
        className={"answer " + (score === value ? "selected" : "")}
        onClick={onClick}>
        {text}
    </p>
)

export default AnswerRow;
